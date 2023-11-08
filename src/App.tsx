import './App.scss';
import { useState, useEffect } from 'react';
import Game from './components/Game';
import ControlPanel from './components/ControlPanel';
import Buttons from './components/Buttons';
import GameOver from './assets/GameOver.png';
import Instructions from './components/Instructions';

function App() {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [move, setMove] = useState<number>(0);
  const [action, setAction] = useState<null | string>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(true);

  useEffect(() => {
    if (gameOver) {
      setGameStarted(false);
    }
  }, [gameOver]);

  return (
    <div className='appWrapper'>
      <div className='gameBoyBackground'></div>
      <div className='gameWrapper'>
        {openModal && <Instructions setOpenModal={setOpenModal} />}
        {!gameOver && gameStarted && <ControlPanel move={move} />}
        {gameStarted && (
          <Game
            setGameStarted={setGameStarted}
            action={action}
            setAction={setAction}
            setGameOver={setGameOver}
          />
        )}
        {gameOver && (
          <div>
            <img className='gameOver' src={GameOver}></img>
          </div>
        )}
      </div>
      <Buttons
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        move={move}
        setMove={setMove}
        setAction={setAction}
        setGameOver={setGameOver}
      />
      <div className='gameName'>POCKET JAMESON ©</div>
    </div>
  );
}

export default App;
