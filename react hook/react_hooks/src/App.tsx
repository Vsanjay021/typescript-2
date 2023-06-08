
import './App.css'
import UseStateComponent from "./components/UsestateComponent";
import UseEffectComponent from './components/UseEffectComponent';
function App() {

  return (
    <>
      <div>
        <h1>use state</h1>
        <UseStateComponent/>
        <h1>use Effect</h1>
        <UseEffectComponent/>
      </div>
    </>
  )
}

export default App
