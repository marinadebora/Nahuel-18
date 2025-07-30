import image from "../image";
const PageFour = () => {
  return (
   <div className="w-full h-full mt-8 flex items-center justify-center italic">
      <div className="flex items-center justify-center rounded-2xl w-[20rem] md:w-[40rem] lg:w-[60rem] h-[20rem]  bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1753223898/fondoblanco_hqyv65.avif)] bg-cover  rounded-2xl ">
       <div className="w-[19rem] md:w-[39rem] lg:w-[59rem] h-[19rem] bg-black ">
       <div className='gap-1 flex flex-col h-full items-center justify-between text-[#fff] py-4'>
          <div className='flex items-center justify-center'>
            <p className='text-xl lg:text-3xl'>Tenes fotos en las que aparezcamos juntos?</p>
          </div>
          <div className='flex flex-col items-center justify-center text-sm lg:text-xl '>
            <p >Escanea el Qr o hace click en el botón</p>
            <p>y compartilas!!</p>
          </div>
          <div className='flex flex-col items-center justify-center text-xl gap-1'>
            <img className="w-[8rem]" src={image.qr} alt="qr" />
          </div>
          <div className='flex items-center justify-center'>
            <a className='cursor-ponter border border-black rounded-xl px-2 py-1  hover:text-[#c20000] font-semibold' href="https://drive.google.com/drive/folders/1ljUs6Ti6morEEQq7GJgKMBqTe1k42h-2" target="_blank" rel="noopener noreferrer">Subir fotos</a>
          </div>
        </div>
        
       </div>
        
      </div>
    </div>
  );
};


export default PageFour;