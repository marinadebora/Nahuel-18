
const PageFour = () => {
  return (
   <div className="w-full h-full my-8 flex items-center justify-center italic">
      <div className="flex items-center justify-center rounded-2xl w-[20rem] md:w-[40rem] lg:w-[60rem] h-[20rem]  bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1753223898/fondoblanco_hqyv65.avif)] bg-cover  rounded-2xl ">
       <div className="w-[18rem] md:w-[38rem] lg:w-[58rem] h-[18rem] bg-black ">
       <div className='flex flex-col h-full items-center justify-between text-[#fff] py-4'>
          <div className='flex items-center justify-center'>
            <p className='text-xl lg:text-3xl'>Qué tema no puede faltar?</p>
          </div>
          <div className='flex flex-col items-center justify-center text-sm lg:text-xl '>
            <p >Escribime el nombre y artista </p>
            <p>de esa canción que creas tiene que sonar si o si</p>
          </div>
          <div className='flex flex-col items-center justify-center text-xl gap-1'>
            <p>𝄞</p>
            <p>♫</p>
            <p>♪</p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='border border-black rounded-xl px-2 py-1 hover:bg-black hover:text-white font-semibold' href="#" target="_blank" rel="noopener noreferrer">Sugerir Tema</button>
          </div>
        </div>
        
       </div>
        
      </div>
    </div>
  );
};


export default PageFour;