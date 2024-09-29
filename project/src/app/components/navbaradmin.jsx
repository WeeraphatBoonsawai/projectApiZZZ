'use client';
import Link from "next/link";
import React, { useContext } from 'react'
import { UserContext } from "@/context/UserContext";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Adminnavbar({content}) {
    const { user, setUser, token, setToken } = useContext(UserContext);
    const router = useRouter();
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    text: data.message,
                });
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user_name');
                setUser(null);
                setToken(null);
                router.push('/');
            } else if (response.status === 422) {
                setError(data.errors);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error
            });
        }
    }
    
  return (
      <section>

<div className="flex h-screen bg-black">

    <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-yellow-500">
            <span className="text-black font-bold uppercase">
            Zenless Zone Zero
            </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">

            <nav className="flex-1 px-2 py-4 bg-yellow-400">

                <div className="mx-auto w-32 h-32 relative mt-2 border-4 border-white rounded-full overflow-hidden bg-slate-100">
                <img className="object-cover object-center w-full h-full" 
                src="https://media.tenor.com/f1VM6zVW5s0AAAAi/zzz-zenless-zone-zero.gif" 
                alt="" />
                </div>

                <div className="text-center mt-2">
        <h2 className="font-semibold text-white text-xl">{user?.name}</h2>
        <p className="text-gray-100">Admin</p>
    </div>

    <div className="mt-4"></div>


    <Link href="/AdminHome" className="flex items-center px-4 py-2 text-gray-100 hover:bg-yellow-500">
    <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>
                    Home
                </Link>

                <a href="/AdminDashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-yellow-500">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                            <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
                          </svg>
                    Dashboard
                </a>

                
                <Link href="/AdminPlayables" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-yellow-500">

                <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"/>
</svg>

                          
Playables
                </Link>

                <Link href="/AdminFactions" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-yellow-500">
                <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"/>
</svg>
Factions
                </Link>
                
                <Link href="/AdminBangboos" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-yellow-500">
                <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"/>
</svg>
Bangboos
                </Link>

                <Link href="/AdminAgentsimages" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-yellow-500">
                <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6c0 1.657-3.134 3-7 3S5 7.657 5 6m14 0c0-1.657-3.134-3-7-3S5 4.343 5 6m14 0v6M5 6v6m0 0c0 1.657 3.134 3 7 3s7-1.343 7-3M5 12v6c0 1.657 3.134 3 7 3s7-1.343 7-3v-6"/>
</svg>
                    Images
                </Link>

                <Link href="/" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-yellow-500">
                <svg className="h-6 w-6 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
</svg>


                    Exit
                    
                </Link>



            </nav>
        </div>
    </div>

    <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-transparent border-b border-transparent">
            <div className="flex items-center px-4">
            </div>
        </div>
        <div className="p-4">
        {content}
        </div>
    </div>
    
</div>



      </section>
  );
}
