import { ShoppingBag, ShoppingBagOpen } from '@phosphor-icons/react';
import { useState } from 'react';

const basicIcon = <ShoppingBag weight='fill' color='#95f265' className='w-24 h-[3.75rem]' />;
const hoverIcon = <ShoppingBagOpen weight='fill' color='#95f265' className='w-24 h-[4rem]' />;
const invisibleIcon = <ShoppingBag weight='light' color='#95f265' className='w-24 h-[3.75rem] hidden' />;

// MARK: - CartIcon
function CartIcon({ onEntering }) {
  const [iconVarient, setIconVarient] = useState(basicIcon);
  const handleEnterCart = () => {
    setIconVarient(invisibleIcon);
    onEntering();
  };
  return (
    <div
      className='flex h-fit cursor-pointer'
      onMouseOver={() => setIconVarient(hoverIcon)}
      onMouseLeave={() => setIconVarient(basicIcon)}
      onClick={handleEnterCart}>
      {iconVarient}
      {/* <span className='text-[#95f265]'>0</span> */}
    </div>
  );
}

// MARK: - Cart
export default function Cart({ onEnterCart }) {
  const [entering, setEntering] = useState(false);

  const handleEnterCart = () => {
    setEntering(true);
    onEnterCart();
  };

  return (
    <>
      {entering ? (
        <div className='w-full h-full bg-[#C74C26] bg-opacity-20 flex justify-end items-right'>
          Cart
          <div className='w-[60%] h-[80%] bg-[#bb5dda] rounded-3xl flex flex-col justify-center items-center'>
            <button
              className='bg-[#95f265] text-[#000] text-center border-[2px] border-[#000] py-[6px] px-6 rounded-full text-xl duration-[300ms] hover:scale-[1.1] hover:bg-[#c3f4aa]'
              onClick={() => setEntering(false)}>
              close
            </button>
          </div>
        </div>
      ) : (
        <>
          <CartIcon onEntering={handleEnterCart} />
        </>
      )}
    </>
  );
}
