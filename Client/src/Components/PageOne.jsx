import CuentaRegresiva from "./CuentaRegresiva";
import MusicPlayer from "./MusicPlayer";
/* import PropTypes from 'prop-types'; */

const PageOne = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center mt-8 ">
      <div className=" gap-5  flex items-center justify-start w-[20rem] md:w-[40rem] lg:w-[60rem] h-full bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752702141/fondoNahuel_akt4tt.jpg)] bg-contain bg-center ">
      <div className=" w-[20rem] h-[8rem] flex items-center justify-center pl-2 "><img className=' w-[20rem] font-bold italic' src="https://res.cloudinary.com/deqbqghhq/image/upload/v1752789905/nahu_sl9kcd.png" alt="Nahuel" /></div>
      <div className=" w-[20rem] h-[12rem] flex items-center justify-center">
        <div className="w-[15rem] h-[8rem] bg-white rounded-xl shadow-xl shadow-black flex items-center justify-center">
 <CuentaRegresiva />
        </div>
     
      </div>
      <div className="pt-1 w-[12rem] h-[12rem] flex items-center justify-center "><MusicPlayer /></div>
      </div>
      </div>
  );
};

/* page1.propTypes = {}; */

export default PageOne;
/*         <div className="w-full h-full  flex  items-center justify-center mt-8 ">
      <div className=" gap-5 border-blue-400 flex items-center justify-start w-[20rem] md:w-[40rem] lg:w-[60rem] h-full bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752702141/fondoNahuel_akt4tt.jpg)] bg-contain bg-center ">
      <div className=" w-[20rem] h-[12rem] flex items-center justify-center border pl-2"><img className=' font-bold italic' src="https://res.cloudinary.com/deqbqghhq/image/upload/v1752789905/nahu_sl9kcd.png" alt="Nahuel" /></div>
      <div className=" w-[20rem] h-[12rem] flex items-center justify-center">
        <div className="w-[15rem] h-[8rem] bg-white rounded-xl shadow-xl shadow-black flex items-center justify-center">
 <CuentaRegresiva />
        </div>
     
      </div>
      <div className="pt-1 w-[12rem] h-[12rem] flex items-center justify-center "><MusicPlayer /></div>
      </div>
      </div>*/