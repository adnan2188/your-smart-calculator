import './App.css';
import Calculater from './components/Calculater';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculationHistory from './components/CalculationHistory';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculater />}></Route>
        <Route path='/history' element={<CalculationHistory />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
