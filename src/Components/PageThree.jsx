import Image from '../image'


const PageThree = () =>
{
  return (
    <div className="w-full h-full mt-8 flex items-center justify-center italic ">
      <div className="w-[20rem] md:w-[40rem] lg:w-[60rem] h-[40rem]  flex  items-center justify-center bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover text-white rounded-2xl">
        <div className="w-[19rem] md:w-[39rem] lg:w-[59rem] h-[39rem]  bg-[#000] flex flex-col gap-6 items-center justify-center">
          <p className='text-2xl lg:text-3xl pb-4 '>y dónde sera la fiesta?...</p>
          <div className='flex flex-col gap-2 border py-5 px-8 rounded-xl items center justify-center'>
            <p className=''>Las Chacras</p>
            <p className=''>Ruta 11, km 307, calle los talas, San Clemente del Tuyu</p>

          </div>
          <div className='py-2 text-m flex flex-col items-center justify-center'>
            <p>Sábado 23 de Agosto 21:00 hs</p>
            <p>la puntualidad será mi primer regalo!!</p>
          </div>
          <div>
            <a href='https://maps.app.goo.gl/yEoJor9XSN6psfLAA' target="_blank" className='border border-white m-4 rounded-xl px-2 py-1 hover:bg-white hover:text-black font-semibold '>Cómo llegar</a>
          </div>
          <div className='lg:w-[20rem] lg:h-[10rem] flex text-sm items-center justify-center'>
            <iframe className='w-full h-full rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12847.385270246275!2d-56.75596147872669!3d-36.388714245521186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c04c491d03acd%3A0xdb82775ed75e9379!2sLas%20Chacras!5e0!3m2!1ses!2sar!4v1753840842441!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;