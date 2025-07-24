import { useForm } from "react-hook-form";

const Form = () =>
{
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      attendance: "",
      comment: ""
    }
  });

  const submitForm = (values) =>
  {
    console.log(values)
    reset()
  }
  return (
    <div className="w-full h-full flex items-center justify-center text-[#fff]">
      <div className="w-[80%] h-[80vh] md:w-[20rem] flex items-center justify-center">
        <form onSubmit={handleSubmit(submitForm)} className=" p-4 w-[20rem] h-[80%] flex flex-col items-around justify-around shadow-xl/30 shadow-gray-200 rounded-2xl ">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="name" className="block text-xs md:text-sm/6 font-medium ">
                Nombre:
              </label>
              <input className="pl-2 bg-black w-full h-[2.5rem]  rounded-xl outline-1 -outline-offset-1 outline-[#4c0202]  focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000]" type="text" name="name" id="name"
                {...register("name", { required: true })} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="attendance" className="block text-xs md:text-sm/6 font-medium ">
                Asistiras?
              </label>
              <select
                className="appearance-none bg-black block w-full rounded-md  px-3 py-2.5 text-xs md:text-base  outline-1 -outline-offset-1 outline-[#4c0202] focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000] text-xs"
                {...register("attendance", { required: true })}
              >
                <option value='si'>si</option>
                <option value='no'>no</option>

              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="comment" className="block text-xs md:text-sm/6 font-medium ">
                Deja algun comentario
              </label>
              <textarea className="w-full h-[5rem]  rounded-xl resize-none outline-1 -outline-offset-1 outline-[#4c0202] caret-[#c20000] placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-[#c20000] p-2" name="comment" id="comment"
                {...register("comment", { required: true })}></textarea>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <input className="p-0.5  w-[5rem] border border-[#4c0202] rounded-sm hover:border-[#c20000] cursor-pointer" type="submit" value="enviar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};


export default Form;