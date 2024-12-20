import { useState } from 'react';
import '../Game/Game.css';
import Board from '../TicTacToe/Board';

function Game(){

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    return(
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                <ol>{/* AAA */}</ol>
            </div>
        </div>
    );
}

export default Game;