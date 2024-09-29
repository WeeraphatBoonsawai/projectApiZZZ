"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';

export default function AgentsShow() {
  const {slug_img}=useParams();

    console.log(slug_img);

    const[playables,setPlayables]=useState([]);
    const[agentsimages,setAgentsimages]=useState([]);
    console.log(agentsimages)

    const[loading,setLoading]=useState(true);
 
    useEffect(()=>{
        fetchPlayables();
    },[slug_img]);
 
    const fetchPlayables=async()=>{
        try{
          const result=await axios.get("http://localhost:8000/api/playables/detail/"+ slug_img);
          console.log(result.data.playables);

          console.log(result.data);

          setPlayables(result.data.playables)

          setAgentsimages(result.data.agentsimages)

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
      <Navbar/>
        <section>
        <div className="flex flex-col w-full sm:w-auto sm:flex-row p-2 bg-black ">
        <Link href="/PageAgents" className="text-xl ml-5 bg-yellow-500 text-black border border-black py-2 px-6 gap-2 rounded inline-flex items-center">
        <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
</svg>

    <span>
        Back
    </span>
</Link>
    </div>

        <div className="bg-black py-4">
    <div className="container mx-auto px-2 md:px-12">
        <div className="flex flex-col md:flex-row items-center">

            <div className="md:w-1/2 lg:w-2/3">
            <h2 className="text-4xl md:text-6xl lg:text-4xl text-white font-bold">
            <div className="flex py-2 mr-24">
          <span className="text-white">{playables.slug_factions}</span>
          
        </div>

                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mt-2">
                {playables.agents_name}
                
                </h1>
                <img src={`http://localhost:8000/images/rank/${playables?.rank?.rank_icon}`}
                className='w-[80px] h-[80px]'
                alt="" />

<div className="flex flex-wrap justify-start gap-2 mt-2">

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
        {playables?.rank?.rank_name}
          </span>
        </a>
        <a className="relative">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
        {playables.slug_factions}
          </span>
        </a>
</div>

                <div className="flex mr-24 mt-4">
          <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-3xl px-1">Attributes</a>
        </div>

        <div className="flex py-2 mr-24">
          <span className="text-white">Agent Name</span>
          <span className="ml-auto text-white">{playables.agents_name}</span>
        </div>

        <div className="flex border-t border-gray-200 py-2 mr-24">
          <span className="text-white">Faction</span>
          <span className="ml-auto text-white">{playables.slug_factions}</span>
        </div>

        <div className="flex border-t border-gray-200 py-2 mr-24">
          <span className="text-white">Birthday</span>
          <span className="ml-auto text-white">{playables.birthdate}</span>
        </div>

        <div className="flex border-t border-gray-200 py-2 mr-24">
          <span className="text-white">Gender</span>
          <span className="ml-auto text-white">{playables.gender?.gender_name}</span>
        </div>

        <div className="flex border-t border-gray-200 py-2 mr-24">
          <span className="text-white">Same Faction</span>
          <span className="ml-auto text-white">{playables.bangboos?.bangboos_name}</span>
        </div>

        <div className="flex mr-24">
          <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-3xl px-1">Character Background</a>
        </div>
       
        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-4xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
        {playables.profile}
    </p>

            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src={`http://localhost:8000/images/icon/${playables.agents_icon}`} 
                 alt="Hero Image" 
                className="rounded-lg shadow-lg h-[600px] w-[700px]" />
            </div>
        </div>
    </div>
</div>

<section className="text-gray-400 bg-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-full h-full bg-yellow-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-yellow-500 font-medium title-font text-4xl mb-2 sm:mb-0">Image Preview</h1>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

    {agentsimages?.map((agentsimages) => (

      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" 
          src={`http://localhost:8000/images/gallery/${agentsimages.agents_img}`}/>
        </div>
      </div>
  ))}
     
    </div>
  </div>
</section>
<Footer/>
</section>
    </div>
  )
}
