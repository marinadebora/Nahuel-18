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
    <div className='pr-4 text-[#c20000]'>
      <button className='w-[4rem] lg:w-[8rem]' onClick={togglePlay}>
      <div className='flex items-center justify-center gap-1'>
        {isPlaying ?<p className='font-bold'>| |</p> : <p className='text-[2.5rem] font-bold'>▸</p> }{/* <img className='w-[1.5rem] lg:w-[2rem]' src={Image.Pause} />  */}{/* <img className='w-[1.5rem] lg:w-[2rem]  ' src={Image.Play} /> */}
        <p className='text-sm  font-bold animate-pulse'>Dale play!!</p> </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
