import React, { useState } from 'react';
import './App.css';
import Game from './components/Game.tsx';
import Menu from './components/Menu.tsx';

function App() {
  const [menuActive, setMenuActive] = useState(true)
  const [firstPlayersName, setFirstPlayersName] = useState("")
  const [secondPlayersName, setSeccondPlayersName] = useState("")

  return (
    <main className='min-h-svh flex justify-center items-center'>
      {menuActive && (
        <Menu setFirstPlayersName={setFirstPlayersName} setSecondPlayersName={setSeccondPlayersName} setMenuActive={setMenuActive}></Menu>
      )}
      {!menuActive && (
        <Game firstPlayersName={firstPlayersName} secondPlayersName={secondPlayersName} setMenuActive={setMenuActive}></Game>
      )}
    </main>
  )
}

export default App;
