import './Alert.css'

function Alert(props) {
  return(
    <div className='alert'>
      <div className='inner-alert'>
        {props.alert}

        <button onClick={props.closeAlert}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Alert;
