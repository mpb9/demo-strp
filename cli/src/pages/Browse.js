import { useState } from 'react';
import Brand from '../components/Brand';
import Cart from '../components/Cart';
import Product from '../components/Product';
import { Sweaters } from '../data/Sweaters';
import WhenHMetSMain from '../images/sweaters/when-harry-met-sally-main.png';
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
        <div className='w-full bg-[#95f265] pt-1 p-[0.125rem] flex h-full'>
          <div className='w-full h-full py-6 px-[10%] rounded-3xl justify-center align-top  bg-[#000]'>
            <div className='w-full h-[8%] mb-2 flex'>
              {/* TOP LEFT - icons, brand, etc  */}
              <div className='w-3/5 h-full ml-[20%] flex items-center justify-center'>
                <Brand />
              </div>
              {/* TOP RIGHT - cart */}
              <div className='w-1/5 h-full justify-center items-center flex'>
                <Cart onEnterCart={handleEnterCart} />
              </div>
            </div>

            {/* products */}
            <div className='h-[85%] mt-10 w-full justify-evenly items-center overflow-scroll scroll-smooth'>
              <div className=''></div>
              <section className=' mb-12 py-4 lg:py-0'>
                <div className='flex justify-center items-center lg:gap-6'>
                  <div className='place-self-center'>
                    <h1 className='max-w-xl mb-2 text-xl text-[#95f265] tracking-tight leading-none md:text-2xl xl:text-3xl'>
                      As seen in theaters
                    </h1>
                    <p className='max-w-lg mb-0 font-thin text-[#889382] md:text-lg lg:text-xl'>
                      Sweaters ethically-sourced with the quality to show-off, and the comfort that'll make you want to
                      binge-in.
                    </p>
                  </div>
                  <div className='hidden lg:flex lg:w-48'>
                    <img src={WhenHMetSMain} className='grayscale' alt='mockup' />
                  </div>
                </div>
              </section>
              <div className='space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0'>
                {Sweaters.map((sweater, index) => (
                  <Product key={index} productInfo={sweater} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
