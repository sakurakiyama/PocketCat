import Fish from '../assets/icons/Fish.png';
import Heart from '../assets/icons/Heart.png';
import Litter from '../assets/icons/Litter.png';
import '../stylesheets/ControlPanel.scss';

interface ControlPanelProps {
  move: number;
}
function ControlPanel({ move }: ControlPanelProps): JSX.Element {
  return (
    <div className='controlWrapper'>
      <img
        className={move === 0 ? 'iconSelected' : 'iconDefault'}
        src={Fish}
      ></img>
      <img
        className={move === 1 ? 'iconSelected' : 'iconDefault'}
        src={Heart}
      ></img>
      <img
        className={move === 2 ? 'iconSelected' : 'iconDefault'}
        src={Litter}
      ></img>
    </div>
  );
}

export default ControlPanel;
