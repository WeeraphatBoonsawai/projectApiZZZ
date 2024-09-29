"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'



export default function page() {
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
<Navbar/>
<section className='bg-black'>
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-yellow-500 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Agents
            </p>
            <h1 className="max-w-5xl mx-auto px-6 text-lg text-gray-500 font-inter">
            While the core abilities and personalities of the characters are predefined, players can customize their appearance and equipment to create a unique look for their team.
            </h1>

        </div>
    </div>


    <section className="mx-12 py-9">
      <main className="grid place-items-center bg-gradient-to-t">

            <section className="grid grid-cols-1 sm:grid-cols-5 gap-4">

            {playablesData.map((playables) => (
                <Link href={`/PageAgents/view/${playables.slug_img}`}  key={playables.id}>
              <div className="bg-yellow-500 shadow-lg rounded p-3">
                <div className="group relative">
                  <img className="w-full md:w-72 block rounded h-[280px] bg-yellow-300" 
                  src={`http://localhost:8000/images/icon/${playables.agents_icon}`} 
                  alt="" />

                  <div className="rounded-l-lg flex items-center justify-center absolute top-4 right-2">
                    <img src={`http://localhost:8000/images/rank/${playables.rank.rank_icon}`}  
                    className="w-[80px] h-[80px]"
                    alt="" />
                    </div>

                  <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-black text-xl text-center">{playables.agents_name}</h3>
                </div>
              </div>
              </Link>
         
))}

              </section>
            </main>
     
          </section>

</section>
<Footer/>
    </section>
  )
}
