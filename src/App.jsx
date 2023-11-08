import './App.scss';
import { useState, useEffect } from 'react';
import Game from './components/Game';
import ControlPanel from './components/ControlPanel';
import Buttons from './components/Buttons';
import GameOver from './assets/GameOver.png';
import Instructions from './components/Instructions';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [move, setMove] = useState(0);
  const [action, setAction] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    if (gameOver) {
      setGameStarted(false);
    }
  }, [gameOver]);

  return (
    <div className='appWrapper'>
      <div className='gameWrapper'>
        {openModal && <Instructions setOpenModal={setOpenModal} />}
        {!gameOver && gameStarted && <ControlPanel move={move} />}
        {gameStarted && (
          <Game
            setGameStarted={setGameStarted}
            action={action}
            setAction={setAction}
            gameOver={gameOver}
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
    </div>
  );
}

export default App;
