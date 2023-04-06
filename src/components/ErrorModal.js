import React,{useContext} from 'react';
import ReactDOM  from 'react-dom';
import Context from '../context/Context';



const ErrorModal = () => {

const ctx = useContext(Context);
const cancelHandler=()=>{
  ctx.setOpenconfirm(false)
}
  return (
    ReactDOM.createPortal( <div>

      <h1>are you confirm</h1>
      <button >yes</button>
      <button onClick={cancelHandler}>cancel</button>
        </div>,document.querySelector("#error"))
   
  );
}

export default ErrorModal;
