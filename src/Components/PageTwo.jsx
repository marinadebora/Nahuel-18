import Carousel from "./Carousel";

const PageTwo = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center mt-8 ">
      <div className="flex  items-center justify-center w-[21rem] md:w-[40rem] lg:w-[60rem] h-[23rem] bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1753223898/fondoblanco_hqyv65.avif)] bg-cover rounded-2xl py-4 ">
        <div className="w-[20rem] md:w-[39rem] lg:w-[59rem] h-[22rem] py-4 bg-[#000] flex items-center justify-center">
          <Carousel />
        </div>
      </div>
    </div>
  );
};


export default PageTwo;