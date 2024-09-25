import { useState } from 'react';
export default function LandingPage({ onEnterStore }) {
  const [entering, setEntering] = useState(false);

  const handleEnterStore = () => {
    setEntering(true);

    setTimeout(() => {
      onEnterStore();
    }, 3800);
  };

  return (
    <div className='h-full w-full bg-black overflow-hidden'>
      {entering ? (
        <div
          className='z-20 text-9xl top-0 left-0 absolute duration-2000 w-full h-full animate-[to-brat] flex justify-center items-center'
          style={{
            animationDuration: '4s',
          }}>
          COZY THREADS
        </div>
      ) : (
        <></>
      )}
      <div className='w-full h-full justify-end flex flex-col bg-snow-falling bg-repeat'>
        <div className='w-full h-[65%] flex flex-col justify-center items-center blur-[1px] hover:blur-[0px] duration-[2000ms]'>
          <h1 className='text-7xl lg:text-6xl md:text-5xl mt-[5%] mb-[12%] text-[#fff] cursor-default transition-all font-bold tracking-[.75em] blur-[1px] hover:blur-[7px] hover:scale-95 hover:tracking-[.9em] duration-[5000ms] text-center'>
            COZY THREADS
          </h1>
          {/* <h1 className='text-7xl lg:text-6xl md:text-5xl mt-[8%] mb-[7%] text-white cursor-default font-bold tracking-[.4em]'>
            HOPING THIS TRICKS YOUR BRAIN INTO FEELING COLD + YOU BUY OUR SWEATERS
            HOPING THIS TRICKS YOU INTO FEELING COLD SO YOU'LL BUY OUR SWEATERS
          </h1> */}
          <div className='flex flex-col justify-center items-center mb-[10%] mt-[5%]'>
            <button
              className='transition-all bg-[#ffffff] text-[#000000] text-center border-[4px] border-[#000] py-[10px] px-16 rounded-full text-2xl tracking-wider duration-[1000ms] hover:scale-[1.2] hover:bg-[#c3f4aa] focus:scale-[20] focus:bg-[#95f265] focus:text-[#95f265] focus:delay-200 focus:duration-[2800ms] font-black'
              onClick={handleEnterStore}>
              shop
            </button>
          </div>
        </div>
        <div className='w-full h-[35%] bg-snow-ground bg-cover bg-center flex justify-center items-end'>
          <h1 className='text-2xl -ml-1 h-[1.6rem] text-left overflow-hidden break-all text-[#000] cursor-default font-black -tracking-[.05em]'>
            SWEATERS AND SWEATERS AND SWEATERS AND SWEATERS AND SWEATERS AND SWEATERS AND SWEATERS AND SWEATERS AND
            SWEATERS AND SWEATERS
          </h1>
        </div>
      </div>
    </div>
  );
}
