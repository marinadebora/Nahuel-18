import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuests } from "../redux/thunks";

const Views = () => {
 const dispatch = useDispatch();
 const {guests, /* error */} = useSelector(state => state.slice);
const guestTable = [{ Header: "Nombre", accessor: "name" },{ Header: "Asistirá", accessor: "attendance" },{ Header: "Comentario", accessor: "comment" }]
 useEffect(() => {
  dispatch(getGuests())
 }, [dispatch]);


  return (
    <div className="p-5">
      {
        guests ?
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
            : <div></div>
      }
       
    </div>
  );
};


export default Views;