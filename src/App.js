import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import {Routes,Route} from 'react-router-dom';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
          <div className='Header'>
            <NavBar/>
          </div>
          <div className='Content'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/About' element={<About/>}/>
            </Routes>
          </div>
          <div className='Footer'>
            <Footer/>
          </div>
    </div>
  );
}

export default App;
