import image from "../image";

const Footer = () => {
  return (
    <div className="w-full h-[10rem] flex items-center justify-center italic text-white">
    <div className="w-[10rem] h-[8rem]  md:w-[20rem] lg:w-[60rem] flex flex-col items-center justify-center rounded-2xl">
       <img src={image.tink} alt="logo tink" />
      <div className="flex items-center justify-center gap-2">
      <img className="w-[1.5rem]" src={image.whatsapp} alt="logo whatsapp" />
      <p>1123224365</p>
      </div>
    </div>
    </div>
  );
};


export default Footer;