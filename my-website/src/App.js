import logo from './logo.svg';
import './index.css';
import MainContainer from './Components/MainContainer';
import { BrowserRouter, Routes} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
    
  )
}

export default App;
