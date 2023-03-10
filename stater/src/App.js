
import './App.css';
// BrowserRouter (normal production) HashRouter (github)

import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';
import Carousel from './components/body/carousel';

import Binomial from './components/distributions/binomial/binomial';
import Poisson from './components/distributions/poisson/poisson';
import Hgeo from './components/distributions/hgeo/hgeo';
import Normal from './components/distributions/normal/normal';
import AOV from './components/anova/groups';
import Regression from './components/regression/groups';

//- npm run build
//- npm run deploy

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/Binomial" element={<Binomial/>}/>
          <Route exact path="/Poisson" element={<Poisson/>}/>
          <Route exact path="/Hipergeometric" element={<Hgeo/>}/>
          <Route exact path="/Normal" element={<Normal/>}/>
          <Route exact path="/Anova" element={<AOV/>}/>
          <Route exact path="/Regression" element={<Regression/> }/>
          <Route exact path="/" element={<Carousel/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
