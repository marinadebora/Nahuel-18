import { useNavigate } from "react-router-dom";

const PageFive = () => {
  const navigate = useNavigate();
  return (
     <div className="w-full h-full my-8 flex items-center justify-center italic">
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[20rem] flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover rounded-2xl">
      <div className='flex flex-col w-[18rem] md:w-[38rem] lg:w-[58rem] h-[18rem]  bg-[#000] items-center justify-center gap-2 text-white py-4'>
      <p className='text-3xl pb-4 '>Venís?</p>
      <p>Para nosotros es fundamental saber si</p>
      <p>contamos o no con tu presencia.</p>
      <p>¡No te olvides de confirmarnos!</p>
      <button onClick={()=>navigate("/confirmAttendance")} target="_blank">
      <p className="border border-black m-4 rounded-xl px-2 py-1 hover:bg-black hover:text-white font-semibold">Confirmar asistencia</p>
      </button>
      </div>
      </div>
    </div>
  );
};


export default PageFive;