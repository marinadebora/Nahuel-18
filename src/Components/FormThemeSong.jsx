import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { postCollection } from "../redux/thunks";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import image from "../image";
import { reset_collection } from "../redux/slice";
const FormThemeSong = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { data, error } = useSelector(state => state.slice);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name:"",
      band: "",
      theme: "",
    }
  });
  const submitForm = (values) =>
  {
    dispatch(postCollection({ collection: "music", values }))
    setLoading(true)
    reset()
  }

  useEffect(() =>
  {
    if (data) {
      toast.success(data.data,{theme:"dark"})
      setTimeout(()=>{
        navigate("/")
      },2000)
      dispatch(reset_collection())
    }else if(error){
    toast.error("no pudimos enviarlo",{theme:"dark"})
    }
    
  }, [data, dispatch, error, navigate]);
  return (
  <div className="w-full h-full flex items-center justify-center text-[#fff]">
        <div className="w-[80%] h-[80vh] md:w-[20rem] flex flex-col items-center justify-center">
          <div className="w-[20rem] flex items-center justify-end"> <button onClick={() => navigate("/")} className=" rounded-sm px-3 text-xl hover:text-[#c20000] cursor-pointer">x</button></div>
          <form onSubmit={handleSubmit(submitForm)} className=" p-4 w-[20rem] h-[80%] flex flex-col items-around justify-around shadow-xl/30 shadow-gray-200 rounded-2xl ">
            <div className="flex flex-col gap-5">
               <div className="flex flex-col gap-2 ">
              <label htmlFor="name" className="block text-xs md:text-sm/6 font-medium ">
                Nombre:
              </label>
              <input placeholder="Tu nombre" className="pl-2 bg-black w-full h-[2.5rem] rounded-xl outline-1 -outline-offset-1 outline-[#4c0202]  focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000]" type="text" name="name" id="name"
                {...register("name", { required: true })} />
            </div>

              <div className="flex flex-col gap-2 ">
                <label htmlFor="band" className="block text-xs md:text-sm/6 font-medium ">
                  Banda / Artista:
                </label>
                <input className="pl-2 bg-black w-full h-[2.5rem]  rounded-xl outline-1 -outline-offset-1 outline-[#4c0202]  focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000]" type="text" name="name" id="name"
                  {...register("band", { required: true })} />
              </div>  
              <div className="flex flex-col gap-2">
                <label htmlFor="theme" className="block text-xs md:text-sm/6 font-medium ">
                  Tema:
                </label>
                <input className="w-full  rounded-xl resize-none outline-1 -outline-offset-1 outline-[#4c0202] caret-[#c20000] placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000] p-2" name="comment" id="comment"
                  {...register("theme", { required: true })} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              {
                loading? 
                <button><img className='w-[2rem] ' src={image.gifLoader} /></button>
                :<input className="p-0.5  w-[5rem] border border-[#4c0202] rounded-sm hover:border-[#c20000] cursor-pointer" type="submit" value="enviar" />
              }
              
            </div>
          </form>
          <ToastContainer/>
        </div>
      </div>
  );
};

export default FormThemeSong;