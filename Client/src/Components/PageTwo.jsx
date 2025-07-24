import Carousel from "./Carousel";

const PageTwo = () =>
{
  return (
    <div className="w-full h-full  flex  items-center justify-center mt-8 ">
      <div className="flex  items-center justify-center w-[20rem] md:w-[40rem] lg:w-[60rem]  bg-[url(https://res.cloudinary.com/deqbqghhq/image/upload/v1752700017/fondoNahu_jgk47w.png)] bg-cover rounded-2xl py-4 ">{/*  bg-linear-to-l from-[#c20000]  via-[#ff6969d7]  to-[#c20000] */}
        <div className="w-[16rem] md:w-[36rem] lg:w-[56rem] py-4 bg-[#000] flex items-center justify-center">
          <Carousel />
        </div>
      </div>
    </div>
  );
};


export default PageTwo;