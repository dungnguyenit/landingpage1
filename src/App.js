
import './App.css';
import Invest from './components/ Invest/ Invest';
import Investors from './components/ Investors/ Investors';
import Support from './components/ support/ Support';
import Description from './components/description/Description';
import Download from './components/downloadUnivest/Download';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Product from './components/product/Product';
import Reflect from './components/reflect/Reflect';




function App() {
  return (
    
    <>
    <Navbar/>
    <Description/>
    <Product/>
    <Invest/>
    <Investors/>
    <Reflect/>
    <Download/>
    <Support/>
    <Footer/>
    </>
  );
}

export default App;
