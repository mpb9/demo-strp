import { ShoppingBag, ShoppingBagOpen, ShoppingCartSimple } from '@phosphor-icons/react';
import { useState } from 'react';
import Brand from '../components/Brand';
import Cart from '../components/Cart';
import LandingPage from './LandingPage';
export default function Browse() {
  const [enterStore, setEnterStore] = useState(false);
  const [enterCart, setEnterCart] = useState(false);

  const handleEnterStore = () => {
    setEnterStore(true);
  };

  const handleEnterCart = () => {
    console.log('Entering cart from browse');
    // setEnterCart(true);
  };

  return (
    <div className='h-[100vh] w-full flex'>
      {!enterStore ? (
        <LandingPage onEnterStore={handleEnterStore} />
      ) : (
        <div className='w-full bg-[#95f265] p-2 pb-1 flex h-full'>
          <div className='w-full h-full p-0 rounded-3xl flex bg-[#000]'>
            <Brand />

            {/* products */}
            {/* shopping cart */}
            {/* Branding */}

            <Cart onEnterCart={handleEnterCart} />
          </div>
        </div>
      )}
    </div>
  );
}
