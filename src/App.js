import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import CoinDetail from './components/CoinDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
