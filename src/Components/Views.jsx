import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuests, getMusic } from "../redux/thunks";

const Views = () => {
 const dispatch = useDispatch();
 const {guests, music} = useSelector(state => state.slice);
const guestTable = [{ Header: "Nombre", accessor: "name" },{ Header: "Asistirá", accessor: "attendance" },{ Header: "Comentario", accessor: "comment" }]
const musicTable =  [{ Header: "Nombre", accessor: "name" },{ Header: "Banda / Artista", accessor: "band" },{ Header: "Tema", accessor: "theme" }]
useEffect(() => {
  dispatch(getGuests())
  dispatch(getMusic())
 }, [dispatch]);


  return (
    <div className="p-5 flex flex-col gap-5">
      {
        guests ?
        <div className=" text-white">
          <h1 className="pl-2 pb-2">Cofirmaron asistencia...</h1>
          <table className="min-w-full bg-[#c20000] border border-[#0000] rounded-2xl">
              <thead className=" border border-[#000]">
                <tr>
                  {guestTable.map((column) => (
                    <th
                      key={column.Header}
                      className="py-1 px-2  text-left text-white"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {guests.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border border-[#000]">
                    {guestTable.map((column) => (
                      <td
                        key={column.accessor}
                        className="py-1 px-2 text-white text-sm"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
            : <div className="h-[10rem] flex items-center  justify-center text-white text-center">No pudimos cargar los datos de asistencia...</div>
      }
       {
        music ?
        <div className=" text-white">
          <h1 className="pl-2 pb-2">Temas sugeridos...</h1>
          <table className="min-w-full bg-[#c20000] border border-[#0000] rounded-2xl">
              <thead className=" border border-[#000]">
                <tr>
                  {musicTable.map((column) => (
                    <th
                      key={column.Header}
                      className="py-1 px-2  text-left text-white"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {music.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border border-[#000]">
                    {musicTable.map((column) => (
                      <td
                        key={column.accessor}
                        className="py-1 px-2 text-white text-sm"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
            : <div className="h-[10rem] flex items-center  justify-center text-white text-center">No pudimos cargar los datos de temas sugeridos...</div>
      }
       
    </div>
  );
};


export default Views;