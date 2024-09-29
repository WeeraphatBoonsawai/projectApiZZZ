"use client";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Link from "next/link";
import Adminnavbar from "../components/navbaradmin";

export default function AdminPlayablesHome() {

  const [playablesData, setPlayablesData] = useState([]);
  console.log(playablesData)

  const[loading,setLoading]=useState(true);

  useEffect(() => {
      fetchPlayables(); 
  }, []);

  

  const fetchPlayables = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/playables`);
          const data = await response.json();
          console.log(data);
          if (response.ok) {
              setPlayablesData(data.playables);
              console.log(data.playables);
          } 
      console.log(response.playables);    
      setLoading(false)
      } 
      catch (error) {
          Swal.fire({
              icon: "error",
              text: error,
          });
      }

  }

  const [deleting, setDeleting] = useState(null);
  const handleDelete = async (e, id) => {
    e.preventDefault();
    setDeleting(id);

    try {
      const response = await fetch(`http://localhost:8000/api/playables/` + id, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          text: data.message,
          color: "white",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#005e95",
          background: "rgba(0,0,0,0) linear-gradient(rgba(0, 54, 104, 0.5), rgba(0, 94, 149, 0.5)) repeat scroll 0 0",
        });

        setPlayablesData(prev => prev.filter(playables => playables.id !== id));

        setDeleting(null);
      } else if (data.status === 400) {
        Swal.fire({
          icon: "warning",
          text: data.message,
          color: "white",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#005e95",
          background: "rgba(0,0,0,0) linear-gradient(rgba(0, 54, 104, 0.5), rgba(0, 94, 149, 0.5)) repeat scroll 0 0",
        });
        setDeleting(null);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "มีข้อผิดพลาดกับดึงข้อมูล",
        color: "white",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#005e95",
        background: "rgba(0,0,0,0) linear-gradient(rgba(0, 54, 104, 0.5), rgba(0, 94, 149, 0.5)) repeat scroll 0 0",
      });
    }
  }

  if (loading)
    {
      return <div className="relative bg-black h-screen text-white ">
      <div className="absolute inset-0">
        <img src="https://media.tenor.com/Ph3GschgAjcAAAAi/belle-zzz-belle.gif" 
        alt="Background Image" className="object-cover object-center w-full h-[780px]" />
        <div className="absolute inset-0"></div>
      </div>
    </div>
      
    }

  return (
      <section>

<Adminnavbar 
content=
<div>
<Link href="/AdminPlayables/create" className="ml-4 mb-4 mt-1 text-2xl text-black border hover:bg-yellow-500 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex items-end">
<span>Create</span>
</Link>

 <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
  
            <thead className="bg-amber-300">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Icon</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Agent</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Rank</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Gender</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Birth Date</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Specialty</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Attribute</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
    
        
            {playablesData.map((playables) => (
    
              <tr key={playables.id} className="hover:bg-gray-50">
  
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-28 w-20">
                  <img
                      className="h-full w-full object-cover object-center"
                      src={`http://localhost:8000/images/icon/${playables.agents_icon}`}
                      alt=""
                    />
                  </div>
                </th>

                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.agents_name}</div>
                </td>
  
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.rank.rank_name}</div>
                </td>

                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.gender.gender_name}</div>
                </td>

                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.birthdate}</div>
                </td>
  
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.specialty}</div>
                </td>

                <td className="px-6 py-4">
                  <div className="font-medium text-gray-400">{playables.attribute}</div>
                </td>

                <td className="pX-4 py-4">
                  
                <Link href={`/AdminPlayables/view/${playables.id}`}>
                  <button type="button" className="focus:outline-none text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-300 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Show</button>
                </Link>

                  <Link href={`/AdminPlayables/edit/${playables.id}`}>
                  <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                </Link>

                

                  <button onClick={(e) => handleDelete(e, playables.id)} 
                  type="submit" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Delete
                    </button>
                
                </td>
              </tr>
    
  
  ))}
  
  
            </tbody>
          </table>
    
            </div>
</div>

/>


      </section>

  );
}
