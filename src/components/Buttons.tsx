import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ICONS } from '../constants';
import '../stylesheets/Buttons.scss';

interface ButtonProps {
  gameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  move: number;
  setMove: React.Dispatch<React.SetStateAction<number>>;
  setAction: React.Dispatch<React.SetStateAction<string | null>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

function Buttons({
  gameStarted,
  setGameStarted,
  move,
  setMove,
  setAction,
  setGameOver,
}: ButtonProps): JSX.Element {
  function handleClick(id: string) {
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
