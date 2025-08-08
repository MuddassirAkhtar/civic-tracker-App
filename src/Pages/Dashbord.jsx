import { useContext } from "react";
import { dashbordcontext } from "../Wrapper";

const Dashbord = () => {
  const [dashbord] = useContext(dashbordcontext);

  return (
    <div className='w-[96.5%] h-full overflow-hidden h-screen w-screen '>
      {dashbord.length > 0 ? (
        <table className="w-full table-fixed m-5">
          <thead>
            <tr className="bg-white rounded-2xl">
              <th className="w-1/5 text-left px-4 py-2">ID</th>
              <th className="w-1/5 text-left px-4 py-2">Title</th>
              <th className="w-1/5 text-left px-4 py-2">Location</th>
              <th className="w-1/5 text-left px-4 py-2">Status</th>
              <th className="w-1/5 text-left px-4 py-2">Date</th>
            </tr>
          </thead>

          <tbody>
            {dashbord.map((data) => (
              <tr
                key={data.id}
                className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-2xl"
              >
                <td className="w-1/5 px-4 py-2 break-words">{data.id}</td>
                <td className="w-1/5 px-4 py-2">{data.title}</td>
                <td className="w-1/5 px-4 py-2">{data.location}</td>
                <td className="w-1/5 px-4 py-2">{data.status}</td>
                <td className="w-1/5 px-4 py-2">{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 font-semibold mt-10">
          No complaints submitted yet.
        </p>
      )}
    </div>
  );
};

export default Dashbord;
