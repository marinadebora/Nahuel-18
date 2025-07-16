import { useEffect, useState } from 'react';
import moment from 'moment-timezone';



const CuentaRegresiva = () =>
{
  const [status, setStatus] = useState(false)
  const [fin, setFin] = useState(false)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft()
  {
    const targetDate = moment('2025-08-23'); // Fecha objetivo 2025-08-23
    const now = moment(); // Fecha y hora actual
    const duration = moment.duration(targetDate.diff(now)); // Duración de la diferencia
    const totalDays = Math.ceil(duration.asDays());// Total de días restantes

    return {
      days: totalDays,
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds()
    };
  }

  useEffect(() =>
  {
    const timer = setInterval(() =>
    {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() =>
  {
    if (timeLeft.days < 0) {
      setStatus(false)
      setFin(true)
    } else if ( timeLeft.days <= 0 ) {
      setStatus(true)
    }
 
  }, [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.months, timeLeft.seconds]);

  return (
    fin ? (
      <div className='w-[60rem] flex items-center justify-center '><img className='w-[10rem] md:w-[15rem] rounded-3xl' src={"Image.gracias"} alt="" /></div>
    ) : (
      status ?
        (
          <div className=' flex items-center justify-center '>
            <div className='flex flex-col items-center justify-center italic font-semibold text-[#854c4c]'>
              <img className='w-[15rem] md:w-[25rem]  rounded-3xl' src={"Image.fiesta"} alt="" />
              <p className='italic text-xl'>ES HOY!!!</p>
            </div>
          </div>
        )
        :
        (
          <div className=' flex flex-col gap-3 items-center justify-center italic font-semibold text-[#000] h-[10rem]'>
           
            <div className=''><h2 className='text-xl'> 23 de Agosto del 2025 </h2></div>


            <div className='flex items-center gap-1 justify-center w-[15rem]'>

              {
                timeLeft.days === 1 ? 
                <div className='flex flex-col gap-0.5'>
                <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                 <span className='px-2 text-[#fff]'>{timeLeft.days}</span>
                 </div>
                <div className='w-[2.5rem] flex justify-center items-center'>
                 <p className='px-2 text-[0.5rem]'> Día {' '}</p>
                 </div>
             </div>
               :
               <div className='flex flex-col gap-0.5 '>
               <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                <span className='px-2 text-[#fff]'>{timeLeft.days}</span>
                </div>
               <div className='w-[2.5rem] flex justify-center items-center'>
                <p className='px-2 text-[0.5rem]'> Días {' '}</p>
                </div>
            </div> 
                
                
              }
              {
                timeLeft.hours === 1 ? 
                <div className='flex flex-col gap-0.5'>
                <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                 <span className='px-2 text-[#fff]'>{timeLeft.hours}</span>
                 </div>
                <div className='w-[2.5rem] flex justify-center items-center'>
                 <p className='px-2 text-[0.5rem]'> Hora {' '}</p>
                 </div>
             </div>
                :
                <div className='flex flex-col gap-0.5'>
                   <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                    <span className='px-2 text-[#fff]'>{timeLeft.hours}</span>
                    </div>
                   <div className='w-[2.5rem] flex justify-center items-center'>
                    <p className='px-2 text-[0.5rem]'> Horas {' '}</p>
                    </div>
                </div>
               
                
              }
               <div className='flex flex-col gap-0.5'>
                   <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                    <div className='w-[2.5rem]  flex justify-center items-center'>
                    <span className='px-2 text-[#fff]'>{timeLeft.minutes}</span>
                    </div>
                   
                    </div>
                   <div className='w-[2.5rem] flex justify-center items-center'>
                    <p className='px-2 text-[0.5rem]'> Min {' '}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-0.5'>
                   <div className='w-[2.5rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover flex justify-center items-center'>
                    <div className='w-[2.5rem] flex justify-center items-center'>
                      <span className='px-2 text-[#fff]'>{timeLeft.seconds}</span></div>
                    </div>
                   <div className='w-[2.5rem] flex justify-center items-center'>
                    <p className='px-2 text-[0.5rem]'> Seg {' '}</p>
                    </div>
                </div>


            </div>
          </div>
        ))
  );
};


export default CuentaRegresiva;