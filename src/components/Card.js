import './Card.css'
import x from '../x.svg'
import o from '../o.svg'

function Card(props) {
  const changeMarker = () => {
    if (props.board[props.index] !== '') {
      return;
    }

    props.updateBoard(props.index);
  };

  if (props.board[props.index] === 'x') {
    return (
      <div className='card'>
        <img src={x} />
      </div>
    );
  } else if (props.board[props.index] === 'o') {
    return (
      <div className='card'>
        <img src={o} />
      </div>
    );
  }

  return <div className='card' onClick={changeMarker}></div>;
}

export default Card;

