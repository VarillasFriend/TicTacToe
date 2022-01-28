import './PlayerForm.css'

function PlayerForm(props) {
  const updatePlayer = () => {
    const input = document.querySelector(`#${props.player.marker}_name`);
    props.setName(input.value);
    input.value = '';
  }

  const setAiMode = () => {
    props.setAiMode();
  }

  const aiButton = 
    <button onClick={setAiMode} className='ai-button'>
      Play Against Ai
    </button>

  return (
    <div className='PlayerForm'>
      <label htmlFor={props.player.marker + '_name'}>
        Player {props.player.marker === 'x' ? '1' : '2'} Name
      </label>

      <div className='input'>
        <input id={props.player.marker + '_name'} />

        <button onClick={updatePlayer}>
          Done
        </button>
      </div>

      {props.player.marker === 'o' ? aiButton : ''}
    </div>
  );
}

export default PlayerForm;
