import './PlayerForm.css'

function PlayerForm(props) {
  const updatePlayer = () => {
    const input = document.querySelector(`#${props.player.marker}_name`);
    props.setName(input.value);
    input.value = '';
  }

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
    </div>
  );
}

export default PlayerForm;
