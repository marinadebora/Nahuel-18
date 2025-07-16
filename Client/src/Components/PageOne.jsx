import CuentaRegresiva from "./CuentaRegresiva";
import MusicPlayer from "./MusicPlayer";
/* import PropTypes from 'prop-types'; */

const PageOne = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center mt-8 ">
      <div className=" gap-5 border-blue-400 flex items-center justify-start w-[20rem] md:w-[40rem] lg:w-[60rem] h-full bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752702141/fondoNahuel_akt4tt.jpg)] bg-contain bg-center ">
      <h1 className=' text-[4rem] font-bold italic'>NAHUEL</h1>
      <div className=" w-[20rem]">
      <CuentaRegresiva />
      </div>
      <div className=""><MusicPlayer /></div>
      </div>
      </div>
  );
};

/* page1.propTypes = {}; */

export default PageOne;
/*     <div className="w-full h-full my-8 flex items-center justify-center ">
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-full  bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752699522/fondoNahu_fo8tht.jpg)] bg-center bg-contain bg-no-repeat rounded-2xl">
        <div className='flex flex-col'>
          <div className='flex items-center justify-center gap-1 '>
             {/* <img className='w-[8rem] h-[6rem] ' src="https://res.cloudinary.com/deqbqghhq/image/upload/v1752612901/moto_h38eib.gif" alt="" />  */
/* <p className="italic font-semibold text-[4rem] text-shadow-md text-shadow-[#540202]">NAHUEL</p> */
/* <MusicPlayer />
</div>
<div className='flex flex-col items-center justify-center '>
 <CuentaRegresiva />
</div>
</div>
</div>
</div> */