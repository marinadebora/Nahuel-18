import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image from '../image'
const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="overflow-hidden w-[20rem] md:[23rem] lg:w-[26rem] " ref={emblaRef}>
     <div className="flex items-center justyfy-center gap-2 pl-2 md:gap-5 md:pl-5 lg:gap-8 lg:pl-8">
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[23rem] lg:w-[25rem] h-full  flex items-center justify-center"><img className='h-[20rem] object-cover rounded-3xl' src={image.foto1}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full "><img className='h-[20rem] w-[25rem] object-cover rounded-3xl' src={image.foto2}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full "><img className='h-[20rem] object-cover rounded-3xl' src={image.foto3}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full flex items-center justify-center"><img className='h-[20rem] w-[25rem] object-cover rounded-3xl' src={image.foto4}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[19rem] md:w-[20rem] lg:w-[25rem] h-full flex items-center justify-center "><img className='h-[20rem]  object-cover rounded-3xl' src={image.foto5}/></div>
    </div>
    </div>
  );
};

export default Carousel;