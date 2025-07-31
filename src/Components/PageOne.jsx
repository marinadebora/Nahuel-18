import CuentaRegresiva from "./CuentaRegresiva";
import MusicPlayer from "./MusicPlayer";
import image from "../image";

const PageOne = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center  mt-8">
      <div className=" flex flex-col items-center justify-center w-[21rem] md:w-[40rem] lg:w-[60rem] h-full py-2  bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover bg-center rounded-2xl">

        <div className=" w-[20rem] md:w-[39rem] lg:w-[59rem] h-full py-4 bg-black flex flex-col items-center justify-around  ">
          <div className="w-full h-[8rem]  flex items-around justify-between">
            <div className="w-[20%] text-white "></div>

            <div className="w-[60%] flex items-center justify-center ">
              <div className=" w-[20rem] md:w-[25rem]  flex items-center justify-center ">
                <img className='' src={image.Nahuel} alt="Nahuel" />
              </div>
            </div>

            <div className="w-[20%]"><MusicPlayer /></div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className=""><CuentaRegresiva /></div>
            </div>
        </div>

      </div>
    </div>
  );
};


export default PageOne;
/*  */