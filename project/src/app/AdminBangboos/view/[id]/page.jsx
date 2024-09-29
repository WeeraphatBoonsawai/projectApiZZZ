"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function page() {
    const {id}=useParams();

    console.log(id);

    const[bangboos,setBangboos]=useState([]);

    const[loading,setLoading]=useState(true);
    
    useEffect(()=>{
        fetchBangboos();
    },[id]);
 
    const fetchBangboos=async()=>{
        try{
          const result=await axios.get("http://localhost:8000/api/bangboos/"+id);
          console.log(result.data.bangboos);
          setBangboos(result.data.bangboos)
          setLoading(false)
        }catch(err){
            console.log("Something Wrong");
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
      <Adminnavbar 
      content=
      <div>
      <section className="text-gray-600 body-font bg-white dark:bg-slate-900">

  

<div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
  
    <div
        className="lg:flex-grow mt-5 md:mt-0   
        md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left 
        mb-16 md:mb-0 items-center text-center">
          
        <h1
            className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-yellow-400 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            {bangboos.bangboos_name	}
        </h1>

<div className="flex mr-24">
<a className="flex-grow text-yellow-400 border-b-2 border-yellow-400 py-2 text-2xl px-1">Detail</a>
</div>

<p className="mb-8 md:pl-0 mt-2 pl-2 pr-2 leading-relaxed dark:text-gray-300">
        {bangboos.bangboos_detail}
        </p>


<div className="flex flex-wrap justify-center gap-4">


<a className="relative mt-4">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black">
</span>
<span className="text-center text-xl fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{bangboos.bangboos_name}
</span>
</a>

<a className="relative mt-4">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black">
</span>
<span className="text-center text-xl fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{bangboos.bangboos_img}
</span>
</a>

<a className="relative mt-4">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black">
</span>
<span className="text-center text-xl fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{bangboos?.rank?.rank_name}
</span>
</a>

</div>



    </div>
    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <img className="object-cover object-center rounded w-full h-full" alt="hero" src={`http://localhost:8000/images/bangboo/${bangboos.bangboos_img}`} />
    </div>
    
</div>



<Link href="/AdminBangboos" 
className="ml-4 mb-4 text-black border hover:bg-yellow-500 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex items-end">
<svg className="w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
viewBox="0 0 24 24" class="w-6 h-6 ml-2">
<path d="M5 12h14M5 12l4-4m-4 4 4 4"></path>
</svg>
<span>
Back
</span>

</Link>       
</section>
      </div>
      />

    </div>
  )
}
