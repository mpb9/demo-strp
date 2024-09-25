import { ShoppingBag, ShoppingBagOpen, ShoppingCartSimple } from '@phosphor-icons/react';
import { useState } from 'react';

const basicIcon = <ShoppingBag weight='light' color='#95f265' className='w-12 h-12' />;
const hoverIcon = <ShoppingBagOpen weight='fill' color='#95f265' className='w-12 h-12' />;
const invisibleIcon = <ShoppingBag weight='light' color='#95f265' className='w-12 h-12 hidden' />;

function CartIcon({ onEntering }) {
  const [iconVarient, setIconVarient] = useState(basicIcon);

  const handleEnterCart = () => {
    console.log('Entering cart from cart icon');

    setIconVarient(invisibleIcon);
    onEntering();
  };

  return (
    <div
      className='flex h-fit m-6 cursor-pointer'
      onMouseOver={() => setIconVarient(hoverIcon)}
      onMouseLeave={() => setIconVarient(basicIcon)}
      onClick={handleEnterCart}>
      {iconVarient}
    </div>
  );
}

export default function Cart({ onEnterCart }) {
  const [entering, setEntering] = useState(false);

  const handleEnterCart = () => {
    setEntering(true);
    console.log('Entering cart from cart');
    onEnterCart();
  };

  return <CartIcon onEntering={handleEnterCart} />;
}
