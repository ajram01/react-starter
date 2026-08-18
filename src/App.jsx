import InvestImage from '/investment-calculator-logo.png';
import {Calculator} from './components/Calculator.jsx';

function App() {

  return (
      <>
      <header id="header">
        <img src={InvestImage} alt="Investment logo"/>
        <h1>React Investment Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  )
}

export default App
