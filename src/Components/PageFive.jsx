import { useNavigate } from "react-router-dom";

const PageFive = () => {
  const navigate = useNavigate();
  return (
     <div className="w-full h-full mt-8 flex items-center justify-center italic">
      <div className="w-[21rem] md:w-[40rem] lg:w-[60rem] h-[20rem] flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover bg-center rounded-2xl">
      <div className='flex flex-col w-[20rem] md:w-[39rem] lg:w-[59rem] h-[19rem]  bg-[#000] items-center justify-around gap-2 text-white py-4'>
     <div className="px-4 flex flex-col items-center ">
       <p className='text-3xl pb-4 text-center'>Venís?</p>
      <p className="w-full text-center">Para nosotros es fundamental saber si contamos o no con tu presencia.</p>
      <p>¡No te olvides de confirmarnos!</p>
     </div>
      <button className="cursor-pointer" onClick={()=>navigate("/confirmAttendance")} target="_blank">
      <p className="cursor-ponter border border-black rounded-xl px-2 py-1  hover:text-[#c20000] font-semibold">Confirmar asistencia</p>
      </button>
      </div>
      </div>
    </div>
  );
};


export default PageFive;