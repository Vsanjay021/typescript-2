
import './App.css'
import UseStateComponent from "./components/UsestateComponent";
import UseEffectComponent from './components/UseEffectComponent';
import ChildrenComponent from './components/useContext';
import { UseReducerComponent } from './components/UseReducer';
import { UseRefComponent } from './components/useRef';

function App() {

  return (
    <>
      <div>
        <h1>Use ref</h1>
        <UseRefComponent/>
        <h1>use state</h1>
        <UseStateComponent/>
        <h1>use Effect</h1>
        <UseEffectComponent/>
        <h1>use context</h1>
        <ChildrenComponent/>
        <h1>use reducer</h1>
        <UseReducerComponent/>
      </div>
    </>
  )
}

export default App
