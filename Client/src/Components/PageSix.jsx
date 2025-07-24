
const PageSix = () => {
  return (
  <div className="w-full h-full my-8 flex items-center justify-center italic ">
    <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] p-8 flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1753228086/fondoNahu_k76iur.jpg)]  bg-top-right  rounded-2xl">
      <img className='w-[5rem]' src={Image.regalo} alt="" />
      <div className='flex flex-col items-center justify-center text-white gap-1'>
      <p className=''> El mejor regalo </p>
      <p className=''> siempre será tú presencia. </p>
      <p className=''>Pero en el caso que deseen... </p>
      <div className='w-[10rem] h-[1rem] border-black border-b'></div>
      <div className='py-2 text-center '>
      <p className=''>Maitena </p>
      <p className=''>CVU: 00000000000000000</p>
      <p className=''>Alias: conejo.pepito</p>
      <p className=''>CUIT/CUIL: 000000000</p>
      </div>
      <img className='w-[2rem] py-2' src={Image.corazon} alt="" />
      </div>
    </div>
    </div>
  );
};


export default PageSix;