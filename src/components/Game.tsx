import { useState, useEffect } from 'react';
import {
  TICK_RATE,
  getNextHungerTime,
  getNextDieTime,
  getNextPoopTime,
  getNextSleepTime,
  getNextAttentionTime,
} from '../constants';
import Cat from './Cat';

interface GameProps {
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  action: string | null;
  setAction: React.Dispatch<React.SetStateAction<string | null>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

function Game({
  setGameStarted,
  action,
  setAction,
  setGameOver,
}: GameProps): JSX.Element {
  const [status, setStatus] = useState<string>('Hatching');
  const [clock, setClock] = useState<number>(1);
  const [hungerTime, setHungerTime] = useState<number>(
    getNextHungerTime(clock)
  );
  const [poopTime, setPoopTime] = useState<null | number>(null);
  const [dieTime, setDieTime] = useState<null | number>(null);
  const [sleepTime, setSleepTime] = useState<number>(getNextSleepTime(clock));
  const [attentionTime, setAttentionTime] = useState<number>(
    getNextAttentionTime(clock)
  );

  function feedCat() {
    setAction(null);
    setDieTime(null);
    setStatus('Eating');
    setHungerTime(getNextHungerTime(clock));
    setPoopTime(getNextPoopTime(clock));
    setSleepTime(getNextSleepTime(clock));
    setAttentionTime(getNextAttentionTime(clock));
    setTimeout(() => {
      setStatus('Idling');
    }, 6000);
  }

  function cleanPoop() {
    setAction(null);
    setDieTime(null);
    setStatus('Cleaned');
    setAttentionTime(getNextAttentionTime(clock));
    setHungerTime(getNextHungerTime(clock));
    setPoopTime(getNextPoopTime(clock));
    setSleepTime(getNextSleepTime(clock));
    setTimeout(() => {
      setStatus('Idling');
    }, 4000);
  }

  function giveLove() {
    setAction(null);
    setDieTime(null);
    setStatus('Celebrating');
    setAttentionTime(getNextAttentionTime(clock));
    setHungerTime(getNextHungerTime(clock));
    setPoopTime(getNextPoopTime(clock));
    setSleepTime(getNextSleepTime(clock));
    setTimeout(() => {
      setStatus('Idling');
    }, 4000);
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setClock(clock + 1);

      if (status === 'Hatching') {
        setTimeout(() => setStatus('Idling'), 1000);
      }
      if (status === 'Idling' || status === 'Sleeping') {
        if (clock === hungerTime) {
          setStatus('Hungry');
          setDieTime(getNextDieTime(clock));
        }
        if (clock === attentionTime) {
          setStatus('Attention');
          setDieTime(getNextDieTime(clock));
        }
        if (clock === poopTime) {
          setStatus('Pooping');
          setDieTime(getNextDieTime(clock));
        }
      }
      if (clock === dieTime) {
        setStatus('Dead');
        setGameStarted(false);
        setGameOver(true);
      }
      if (clock === sleepTime) {
        setStatus('Sleeping');
      }
      if (action === 'feed' && status === 'Hungry') {
        feedCat();
      }
      if (action === 'poop' && status === 'Pooping') {
        cleanPoop();
      }
      if (action === 'love' && status === 'Attention') {
        giveLove();
      }
    }, TICK_RATE);

    return () => {
      clearTimeout(timeout);
    };
  }, [clock]);

  return (
    <div>
      <Cat status={status} />
    </div>
  );
}

export default Game;
