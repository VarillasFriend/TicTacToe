import './Card.css'

function Card(props) {
  const changeMarker = () => {
    if (props.board[props.index] !== '') {
      return;
    }

    props.updateBoard(props.index);
  };

  return (
    <div className='card' onClick={changeMarker}>
      {props.board[props.index]}
    </div>
  );
}

export default Card;

