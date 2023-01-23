import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/navbar';
import Footer from './components/footer/footer';
import Carousel from './components/body/carousel';

import { BarPlot } from './components/figures/bar-figure';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <BarPlot/>
      <Footer/>
    </div>
  );
}

export default App;
