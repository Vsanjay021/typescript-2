import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber} from './action';
function App() {
  let state=useSelector((state)=>state.incDec);
  let dispatch=useDispatch()


  return (
    <div className="App">
      <button onClick={()=>{dispatch(incNumber())}} >Increment</button>
      <h1>count:{state.count}</h1>
      <button onClick={()=>{dispatch(decNumber())}} disabled={state.count==0}>Decrement</button>
    </div>
  );
}

export default App;
