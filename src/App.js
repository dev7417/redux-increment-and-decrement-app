import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber} from './action/index'

function App() {
  const myState = useSelector((state)=>state.changeNumber);
  const dispatch = useDispatch();
  return (
   <>
      <div className='container'>
        <h1>Increment Decrement Counter</h1>
        <div className='button'>
          <button onClick={() => dispatch(incNumber())}>+</button>
          <p>{myState}</p>
          <button onClick={()=>dispatch(decNumber())}>-</button>
        </div>
      </div>
   </>
  );
}

export default App;
