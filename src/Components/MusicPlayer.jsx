import { useEffect, useState } from 'react';
import image from '../image';


const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/videoplayback.m4a')); // Crear una única instancia de Audio

  const togglePlay = () => {
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Limpiar el efecto cuando el componente se desmonta
    return () => {
      audio.pause(); // Pausar la música al desmontar el componente
    };
  }, [audio]);

  return (
    <div className=' w-full text-[#fff]'>
      <button className='w-[4rem] md:w-[6rem] lg:w-[8rem]' onClick={togglePlay}>
      <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
        {isPlaying ?<img src={image.Pause} className='w-[1rem] md:w-[1.5rem] cursor-pointer' /> : <img src={image.Play} className='w-[1rem] md:w-[1.5rem] cursor-pointer' /> }{/* <img className='w-[1.5rem] lg:w-[2rem]' src={Image.Pause} />  */}{/* <img className='w-[1.5rem] lg:w-[2rem]  ' src={Image.Play} /> */}
        <p className='text-xs md:text-sm  font-bold animate-pulse'>Dale play!!</p> </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
