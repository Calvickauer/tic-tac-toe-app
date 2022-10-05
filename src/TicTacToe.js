import React, { useState } from 'react'
import './TicTacToe.css';

const TicTacToe = () => {

    const [turn, setTurn] = useState('x');
    const [Squares, setSquares] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    const checkForWin = (cells) => {
        let combos = {
            across: [ [0,1,2], [3,4,5], [6,7,8] ],
            down: [ [0,3,6], [1,4,7], [2,5,8] ],
            diagnol: [ [0,4,8], [2,4,6] ]
        };

        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if (
                    cells[pattern[0]] === '' ||
                    cells[pattern[1]] === '' ||
                    cells[pattern[2]] === '' 
                    
                ){

                } else if (cells[pattern[0]] === cells[pattern[1]] && cells[pattern[1]] === cells[pattern[2]]){
                    setWinner(cells[pattern[0]])
                }
                console.log(pattern)
            });
        }
    }

    const Click = (num) => {
        if (Squares[num] !== ''){
            alert('Clicked already, Try again');
            return;
        }

        let cells = [...Squares];

        if (turn === 'x'){
            cells[num] = 'x'
            setTurn('o');
        } else {
            cells[num] = 'o'
            setTurn('x');
        }

        checkForWin(cells);
        setSquares(cells);
    };


    const handleRestart = () => {
        setWinner(null);
        setSquares(Array(9).fill(''));

    }



    const Square = ({num}) => {
        return <td onClick={() => Click(num)}>{Squares[num]}</td>
    }
  return (
    <div className='container'>
        <table>
            <tbody>
                <tr>
                    <Square num = {0} />
                    <Square num = {1} />
                    <Square num = {2} />
                </tr>
                <tr>
                    <Square num = {3} />
                    <Square num = {4} />
                    <Square num = {5} />
                </tr>
                <tr>
                    <Square num = {6} />
                    <Square num = {7} />
                    <Square num = {8} />
                </tr>
            </tbody>
        </table>
            Turn: {turn}
        {winner && (
            <>
            <p> {winner} is the winner! </p>
            <button onClick={() => handleRestart()}>Play again?</button>
            </>
        )}
    </div>
  )
}

export default TicTacToe