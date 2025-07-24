import CuentaRegresiva from "./CuentaRegresiva";
import MusicPlayer from "./MusicPlayer";
import image from "../image";

const PageOne = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center  mt-8">
      <div className=" flex flex-col items-center justify-center w-[20rem] md:w-[40rem] lg:w-[60rem] h-full shadow-xl/30 shadow-[#c20000] pb-2 rounded-2xl">
       
        <div className="w-full h-[8rem]  flex items-around justify-between  ">
          <div className="w-[20%] "></div>

          <div className="w-[60%] flex items-center justify-center">
            <div className=" w-[20rem] md:w-[25rem]  flex items-center justify-center ">
            <img className='' src={image.Nahuel} alt="Nahuel" />
            </div>
        </div>

          <div className="w-[20%] "><MusicPlayer /></div>
       </div>
       <div className="w-[15rem] mb-4 flex items-center justify-center "><CuentaRegresiva /></div>
      </div>
    </div>
  );
};


export default PageOne;