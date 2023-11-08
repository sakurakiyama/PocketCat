import { useEffect, useState } from 'react';
import '../stylesheets/Cat.scss';

interface CatProps {
  status: string;
}

function Cat({ status }: CatProps): JSX.Element {
  const [catClass, setCatClass] = useState<undefined | string>(undefined);
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
      case 'Cleaned':
        return setCatClass('catClean');
      default:
        return setCatClass('catIdle');
    }
  }, [status]);

  return (
    <div>
      <div className={catClass}></div>
    </div>
  );
}

export default Cat;
