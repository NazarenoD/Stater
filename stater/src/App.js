
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';
import Carousel from './components/body/carousel';

import Binomial from './components/distributions/binomial/binomial';
import Poisson from './components/distributions/poisson/poisson';
import Hgeo from './components/distributions/hgeo/hgeo';
import Normal from './components/distributions/normal/normal';
import AOV from './components/anova/groups';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
      <Routes>
          <Route exact path="/Binomial" element={<Binomial/>}/>
          <Route exact path="/Poisson" element={<Poisson/>}/>
          <Route exact path="/Hipergeometric" element={<Hgeo/>}/>
          <Route exact path="/Normal" element={<Normal/>}/>
          <Route exact path="/Anova" element={<AOV/>}/>
          <Route exact path="/" element={<Carousel/>}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
