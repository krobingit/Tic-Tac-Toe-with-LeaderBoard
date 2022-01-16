import { useEffect, useState } from 'react';
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Button from '@mui/material/Button';
import { LeaderBoard } from './LeaderBoard';

export function TicTacToe() {
  const [board, setBoard] = useState([null, null, null,
    null, null, null, null, null, null]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c])
        return board[a];
    }
    return null;
  };
  //Declaring winner variable
  var winner = decideWinner(board);
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (id) => {
    if (winner === null && !board[id]) {
      const boardCopy = [...board];
      boardCopy[id] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  function Box({ onPlayerClick, val }) {
    //const [val, setVal] = useState(null);
    return (<div className="gamebox"
      onClick={onPlayerClick} style={{ color: val === "X" ? "green" : "red" }}>{val}</div>
    );
  }

  const { width, height } = useWindowSize();

  const [XPoints, setXPoints] = useState(0);
  const [OPoints, setOPoints] = useState(0);
  //const id = 100;
  useEffect(() => {
    if (winner === "X") {
      setXPoints((XPoints)=>XPoints + 1)
    }
    if (winner === "O") {
      setOPoints((OPoints)=>OPoints + 1)
    }
  }, [winner])

    function reset() {
      setBoard([null, null, null, null, null, null, null, null, null]);
      winner = null;
    }
  const [check, setCheck] = useState(false);
  return (

    <div className="full-game">
      {winner ? <Confetti
        width={width}
        height={height} gravity={0.05}
      /> : ""}
      <h1 className="Title">Tic Tac Toe</h1>
        <div className="board">
          {board.map((val, index) => <Box val={val} onPlayerClick={() => handleClick(index)} />)}
        </div>
        {winner ? <div className="winner"
        style={{
          color: winner === "X" ? "green" : "red", margin: "2rem 0 0 0", display: "flex", justifyContent: "center"
        }}>🏆 Player {winner} WON!!!</div> : ""}
      <h2 className="Info">{isXTurn ? "Its X Turn now" : "Its O Turn now"}</h2>
      <div className="btns">
        <Button size="small" variant="contained" color="secondary" style={{ fontSize: "1.3rem" }} onClick={() => setIsXTurn(true)} >Start with X</Button>
        <Button size="small" variant="contained" color="secondary" style={{ marginLeft: "0.8rem", fontSize: "1.3rem" }} onClick={() => setIsXTurn(false)} >Start with 0</Button>
        </div>

      <div className="Reset">
        <Button size="large" variant="contained" color="secondary" style={{ marginTop: "1rem", fontSize: "1.3rem" }} onClick={reset} >Restart Game</Button>
      </div>
      <Button onClick={() => setCheck(!check)} size="large" variant="contained" color="secondary" style={{ margin: "1.5rem 0", fontSize: "1.3rem" }} >{check ? "Hide" : "Check"} LeaderBoard</Button>
      {check ? <LeaderBoard XPoints={XPoints} OPoints={OPoints} /> : ''}

    </div>

  );
}

