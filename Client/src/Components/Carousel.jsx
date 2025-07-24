import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import image from '../image'
const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <div className="overflow-hidden w-[20rem] md:[23rem] lg:w-[26rem] " ref={emblaRef}>
     <div className="flex items-center justyfy-center gap-2 pl-2 md:gap-5 md:pl-5 lg:gap-8 lg:pl-8">
      <div className="flex grow-0 shrink-0 rounded-3xl w-[12rem] md:w-[15rem] lg:w-[25rem] h-full "><img className=' object-cover rounded-3xl' src={image.background}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[12rem] md:w-[15rem] lg:w-[25rem] h-full "><img className=' object-cover rounded-3xl' src={image.background2}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[12rem] md:w-[15rem] lg:w-[25rem] h-full "><img className=' object-cover rounded-3xl' src={image.background3}/></div>
  {/*     <div className="flex grow-0 shrink-0 rounded-3xl w-[12rem] md:w-[15rem] lg:w-[25rem] h-full "><img className=' object-cover rounded-3xl' src={image.background}/></div>
      <div className="flex grow-0 shrink-0 rounded-3xl w-[12rem] md:w-[15rem] lg:w-[25rem] h-full "><img className=' object-cover rounded-3xl' src={image.background2}/></div> */}
    </div>
    </div>
  );
};

export default Carousel;