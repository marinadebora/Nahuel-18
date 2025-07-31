import { useNavigate } from "react-router-dom";

const PageSix = () => {
    const navigate = useNavigate();
  return (
  <div className="w-full h-full mt-8 flex items-center justify-center italic ">
    <div className="w-[21rem] md:w-[40rem] lg:w-[60rem] h-[20rem] flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1753223898/fondoblanco_hqyv65.avif)] bg-cover rounded-2xl">
        <div className="w-[20rem] md:w-[39rem] lg:w-[59rem] h-[19rem] bg-black flex flex-col gap-2 items-center justify-around text-white p-4">
          <div className='flex items-center justify-center'>
            <p className='text-xl lg:text-3xl'>Qué tema no puede faltar?</p>
          </div>
          <div className='flex flex-col items-center justify-center text-sm lg:text-xl text-center px-4'>
            <p >Escribime el nombre y artista de esa canción que creas tiene que sonar si o si</p>
           
          </div>
          <div className='text-xl '>
            <p>𝄞 ♫ ♪</p>
          </div>
            <button className="cursor-pointer" onClick={()=>navigate("/themeSong")} target="_blank">
      <p className="cursor-ponter border border-black rounded-xl px-2 py-1  hover:text-[#c20000] font-semibold">Sugerir tema</p>
      </button>
        </div>
      </div>
    </div>
  );
};


export default PageSix;