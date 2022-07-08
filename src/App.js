import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './component/common/Navbar'
import Menu from './pages/Menu';
import { Footer } from './component/common/Footer';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
