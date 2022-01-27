function PlayerForm(props) {
  const updatePlayer = () => {
    const input = document.querySelector(`#${props.player.marker}_name`);
    props.setName(input.value);
    input.value = '';
  }

  return (
    <div>
      <label htmlFor={props.player.marker + '_name'}>
        Player {props.player.marker === 'x' ? '1' : '2'} Name
      </label>
      <input id={props.player.marker + '_name'} />

      <button onClick={updatePlayer} />
    </div>
  );
}

export default PlayerForm;
