/* eslint-disable react/prop-types */
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ICONS } from '../constants';

import '../stylesheets/Buttons.scss';

function Buttons({
  gameStarted,
  setGameStarted,
  move,
  setMove,
  setAction,
  setGameOver,
}) {
  function handleClick(id) {
    if (id === 'left') {
      setMove((prevState) => {
        return (2 + prevState) % ICONS.length;
      });
    } else if (id === 'right') {
      setMove((prevState) => {
        return (1 + prevState) % ICONS.length;
      });
    } else if (id === 'middle') {
      !gameStarted
        ? (setGameStarted(true), setGameOver(false))
        : setAction(ICONS[move]);
    }
  }

  return (
    <div className='buttonWrapper'>
      <div className='buttons'>
        <button className='button' onClick={() => handleClick('left')}>
          <ArrowLeftIcon />
        </button>
        <button className='button' onClick={() => handleClick('middle')}>
          {!gameStarted ? <PlayCircleIcon /> : <CheckCircleIcon />}
        </button>
        <button className='button' onClick={() => handleClick('right')}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Buttons;
