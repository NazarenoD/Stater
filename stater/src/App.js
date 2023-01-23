
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';
import Carousel from './components/body/carousel';
import Distribution from './components/figures/distributions';

import { BarPlot } from './components/figures/bar-figure';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Distribution/>
      <Router>
      <Routes>
          <Route exact path="/distributions" element={<BarPlot/>}/>
          <Route exact path="/" element={<Carousel/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
