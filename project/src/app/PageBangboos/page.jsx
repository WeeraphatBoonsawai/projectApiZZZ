"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function page() {
  const [bangboosData, setBangboosData] = useState([]);
  console.log(bangboosData)
  const[loading,setLoading]=useState(true);
  
  useEffect(() => {
      fetchBangboos(); 
  }, []);

  const fetchBangboos = async () => {
      try {
          const response = await fetch(`http://localhost:8000/api/bangboos`);
          const data = await response.json();
          console.log(data);
          if (response.ok) {
              setBangboosData(data.bangboos);
              console.log(data.bangboos);
          } 
      console.log(response.bangboos);   
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
    <div>
      <Navbar/>
      <section class="bg-black dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
    <div className="text-center">
            <p
                className="max-w-4xl mx-auto mb-4 text-3xl font-bold leading-tight text-yellow-500 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                Bangboo
            </p>
            <h1 className="max-w-5xl mx-auto px-6 text-lg text-gray-500 font-inter">
            Bangboo are 'pets' in Zenless Zone Zero that help your team - find every Bangboo available in the game below!
                        </h1>

        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">

        {bangboosData.map((bangboos) => (

            <div class="lg:flex bg-yellow-500 text-white rounded-lg">
                <img class="object-cover w-32 lg:w-40 bg-yellow-300" 
                src={`http://localhost:8000/images/bangboo/${bangboos.bangboos_img}`} 
                 alt=""/>

                <div class="flex flex-col justify-start py-6 lg:mx-6">

                <h1 class="text-4xl font-semibold text-black dark:text-white ">
                    {bangboos.bangboos_name}
                    </h1>

                <img src={`http://localhost:8000/images/rank/${bangboos.rank.rank_icon}`}   
                    className="w-[64px] h-[64px] mt-4"
                    alt="" />

                    

                    

                    <span class="mt-4 text-sm text-white dark:text-gray-300">{bangboos.bangboos_detail}</span>
                </div>
            </div>

          ))}

        </div>
    </div>
</section>

      <Footer/>
    </div>
  )
}
