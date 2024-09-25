import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Confirmation from './components/Confirmation';
import Browse from './pages/Browse';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='success' element={<Confirmation />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
}
