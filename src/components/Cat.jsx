/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../stylesheets/Cat.scss';

function Cat({ status }) {
  const [catClass, setCatClass] = useState(undefined);
  useEffect(() => {
    switch (status) {
      case 'Hatching':
        return setCatClass('catHatching');
      case 'Pooping':
        return setCatClass('catPooping');
      case 'Celebrating':
        return setCatClass('catCelebrating');
      case 'Hungry':
        return setCatClass('catHungry');
      case 'Eating':
        return setCatClass('catEating');
      case 'Sleeping':
        return setCatClass('catSleeping');
      case 'Idling':
        return setCatClass('catIdle');
      case 'Dead':
        return setCatClass('catDied');
      case 'Attention':
        return setCatClass('catSad');
      default:
        return setCatClass('catIdle');
    }
  }, [status]);

  console.log(status);
  return (
    <div>
      <div className={catClass}></div>
    </div>
  );
}

export default Cat;
