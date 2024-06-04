import './App.css';
import { useState } from "react"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from 'react';

function App() {
  const PLAYER_1 = "X";
  const PLAYER_2 = "O";
  const PLAYER_1_NAME = "1";
  const PLAYER_2_NAME = "2";
  const TIE = "tie";
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
 
  const handleClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer(PLAYER_1)
  }

  const checkWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    if (board.every((cell) => cell !== null)) {
      return TIE
    }
    return null
  }
  const winner = checkWinner()

  return (
      <main className='min-h-svh flex justify-center items-center'>
    <Card className="w-96">
       <CardHeader
          className="mb-5 grid h-25 place-items-center"
          >
            {
              winner === null ?
              ( 
                <Typography type='h2'>
                It's player {currentPlayer === PLAYER_1? (PLAYER_1_NAME): (PLAYER_2_NAME)}'s turn!
               </Typography>
              ) : winner === TIE ? (
                <Typography type='h2' className='text-orange-500'>
                  It's a tie
                </Typography>
              ) : winner === PLAYER_1 ? (
                <Typography type='h2' className='text-red-500'>
                  {PLAYER_1_NAME} wins!
                </Typography>
              ) : (
                <Typography type='h2' className='text-blue-500'>
                  {PLAYER_2_NAME} wins!
                </Typography>
              )}  
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {board.map((cell, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-4xl font-bold cursor-pointer transition-colors ${
                      cell === PLAYER_1
                        ? "text-red-500 hover:bg-red-200"
                        : cell === PLAYER_2
                        ? "text-blue-500 hover:bg-blue-200"
                        : "hover:bg-gray-300"
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {cell}
                  </div>
                ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="mt-6 pt-0 items-center justify-center">
          <div className='flex justify-center flex '>
            <Button className="pr-4 pl-4 pt-1 pb-1 font-bold hover:bg-gray-100" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <div className='flex justify-center m-2'>
          <Typography>
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              className="ml-1 font-bold"
              >
              Sign up
            </Typography>
          </Typography>
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

export default App;
