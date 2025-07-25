import Image from '../image'


const PageThree = () =>
{
  return (
    <div className="w-full h-full lg:my-8 flex items-center justify-center italic ">
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[40rem]  flex  items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover text-white rounded-2xl">
<div className="w-[19rem] md:w-[39rem] lg:w-[59rem] h-[39rem]  bg-[#000] flex flex-col gap-6 items-center justify-center">
        <p className='text-2xl lg:text-3xl pb-4 '>y dónde sera la fiesta?...</p>
        <div className='flex flex-col gap-2 border py-5 px-8 rounded-xl items center justify-center'>
          <img className='w-[5rem]' src={Image.salon} alt="logo del salon" />
          <p className=''>Club Portugués</p>
          <p className=''>Escribano Francisco Vasquez, Canning</p>
          <a href='https://www.instagram.com/andorinha_fiestas?igsh=MWU1eXlxMnZhazY4bw%3D%3D' target="_blank" >
            <div className='flex items-center justify-start gap-2'>
              <img className='w-[1.2rem]' src={Image.insta} alt="logo de instagram" />
              andorinha_fiestas
            </div>
          </a>
        </div>
        <div className='py-2 text-m flex flex-col items-center justify-center'>
          <p>Sábado 8 de febrero 21:00 hs</p>
          <p>la puntualidad será mi primer regalo!!</p>
        </div>
        <div>
          <a href='https://maps.app.goo.gl/miDQX3aSttnqGFsw5' target="_blank" className='border border-white m-4 rounded-xl px-2 py-1 hover:bg-white hover:text-black font-semibold '>Cómo llegar</a>
        </div>
        <div className='lg:w-[20rem] lg:h-[10rem] flex text-sm items-center justify-center'>
          <iframe className='w-full h-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.371129022243!2d-58.4907424251307!3d-34.87202577171602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd6ec72c87701%3A0x78f782fdd4320234!2sANDORINHA!5e0!3m2!1ses!2sar!4v1720125876907!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
</div>
      </div>
    </div>
  );
};

export default PageThree;