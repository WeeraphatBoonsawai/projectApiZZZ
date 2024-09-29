"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function AdminPlayablesShow() {
    const {id}=useParams();

    console.log(id);

    const[playables,setPlayables]=useState([]);

    const[loading,setLoading]=useState(true);
    
    useEffect(()=>{
        fetchPlayables();
    },[id]);
 
    const fetchPlayables=async()=>{
        try{
          const result=await axios.get("http://localhost:8000/api/playables/"+id);
          console.log(result.data.playables);
          setPlayables(result.data.playables)
          setLoading(false)
        }catch(err){
            console.log("Something Wrong");
        }
    }

    if (loading)
        {
          return <div class="relative bg-black h-screen text-white ">
          <div class="absolute inset-0">
            <img src="https://media.tenor.com/Ph3GschgAjcAAAAi/belle-zzz-belle.gif" 
            alt="Background Image" class="object-cover object-center w-full h-[780px]" />
            <div class="absolute inset-0"></div>
          </div>
        </div>
          
        }

  return (
      <section>

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
            {playables.agents_name}
        </h1>

<div className="flex mr-24">
<a className="flex-grow text-yellow-400 border-b-2 border-yellow-400 py-2 text-2xl px-1">Detail</a>
</div>

        <p className="mb-8 md:pl-0 mt-2 pl-2 pr-2 leading-relaxed dark:text-gray-300">
        {playables.profile}
        </p>

<div className="flex flex-wrap justify-center gap-4">

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.agents_name}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables?.gender?.gender_name}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables?.rank?.rank_name}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.birthdate}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.specialty}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.attribute}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.agents_icon}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.slug_factions}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables.slug_img}
</span>
</a>

<a className="relative">
<span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
<span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
{playables?.bangboos?.bangboos_name}
</span>
</a>

</div>


    </div>
    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <img className="object-cover object-center rounded w-[360px] h-[480px]" alt="hero" src={`http://localhost:8000/images/icon/${playables.agents_icon}`} />
    </div>
    
</div>



<Link href="/AdminPlayables" 
className="ml-4 mb-4 text-black border hover:bg-yellow-500 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex items-end">
<svg class="w-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
viewBox="0 0 24 24" className="w-6 h-6 ml-2">
<path d="M5 12h14M5 12l4-4m-4 4 4 4"></path>
</svg>
<span>
Back
</span>

</Link>       
</section>
</div>
/>

      



          
          



      </section>

  );
}
