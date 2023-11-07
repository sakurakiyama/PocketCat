import { useState, useEffect } from 'react';
import {
  TICK_RATE,
  getNextHungerTime,
  getNextDieTime,
  getNextPoopTime,
  getNextSleepTime,
  getNextAttentionTime,
} from '../constants';
import Cat from '../components/Cat';

function Game({ setGameStarted, action, setAction, gameOver, setGameOver }) {
  const [status, setStatus] = useState('Hatching');
  const [clock, setClock] = useState(1);
  const [hungerTime, setHungerTime] = useState(getNextHungerTime(clock));
  const [poopTime, setPoopTime] = useState(undefined);
  const [dieTime, setDieTime] = useState(undefined);
  const [sleepTime, setSleepTime] = useState(getNextSleepTime(clock));
  const [attentionTime, setAttentionTime] = useState(
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

  function cleanPoop() {}

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
      if (status === 'Idling') {
        if (clock === hungerTime) {
          setStatus('Hungry');
          setDieTime(getNextDieTime(clock));
        }
        if (clock === attentionTime) {
          setStatus('Attention');
          setDieTime(getNextDieTime(clock));
        }
      }
      if (clock === dieTime) {
        setStatus('Dead');
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

  console.log(status);

  return (
    <div>
      <Cat status={status} />
    </div>
  );
}

export default Game;
