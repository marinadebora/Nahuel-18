import CuentaRegresiva from "./CuentaRegresiva";
import MusicPlayer from "./MusicPlayer";
/* import PropTypes from 'prop-types'; */

const PageOne = () => {
  return (
        <div className="w-full h-full my-8 flex items-center justify-center text-[#c20000]">
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-full   rounded-2xl">{/* bg-[url(../assets/lluviaPetalos.gif)] */}
        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-1 '>
             <img className='w-[8rem] h-[6rem] ' src="https://res.cloudinary.com/deqbqghhq/image/upload/v1752612901/moto_h38eib.gif" alt="" /> 
           <p className="italic font-semibold text-[4rem] text-shadow-md text-shadow-[#540202]">NAHUEL</p>
            <MusicPlayer /> 
          </div>
          <div className='flex flex-col items-center justify-center '>
            <CuentaRegresiva />
          </div>
         </div>
      </div>
    </div>
  );
};

/* page1.propTypes = {}; */

export default PageOne;