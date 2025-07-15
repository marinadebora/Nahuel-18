import { useEffect, useState } from 'react';


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
    <div className='pr-4 '>
      <button className='w-[4rem] lg:w-[8rem]' onClick={togglePlay}>
      <div className='flex items-center justify-center gap-2'>
        {isPlaying ?<p className='color-red-600'>| |</p> : <p className='color-res-600 text-[2rem]'>▸</p> }{/* <img className='w-[1.5rem] lg:w-[2rem]' src={Image.Pause} />  */}{/* <img className='w-[1.5rem] lg:w-[2rem]  ' src={Image.Play} /> */}
        <p className='text-xs animate-pulse'>Dale play!!</p> </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
