import '../stylesheets/Instructions.scss';

interface InstructionsProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function Instructions({ setOpenModal }: InstructionsProps) {
  function handleClose() {
    setOpenModal(false);
  }

  return (
    <div onClick={handleClose} className='overlay'>
      <div className='modalContainer'>
        <div className='modalContents'>
          Please use the icons to choose your actions: feed, give attention or
          clean. To begin the game, click anywhere outside of the modal and
          press the play button!
        </div>
      </div>
    </div>
  );
}

export default Instructions;
