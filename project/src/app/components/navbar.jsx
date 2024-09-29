'use client';
import Link from "next/link";
import React, { useContext } from 'react'
import { UserContext } from "@/context/UserContext";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Navbar(){
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
<navbar>
      <div className='w-full py-3 border-b bg-yellow-500'>

        <div className='flex justify-between px-20 items-center font-semibold'>
          <div>
            <img src="https://cdn2.steamgriddb.com/logo_thumb/50380b0324d6b0ac2f9eed1844d0a2e5.png" width="200" alt="" />
          </div>
          <div className='flex xl:gap-10 md:gap-8  gap-2'>
            <Link href="/">Home</Link>
            <Link href="/PageAbout">About</Link>
            <Link href="/PageAgents">Agents</Link>
            <Link href="/PageBangboos">Bangboos</Link>
            <Link href="/pageServices">Services</Link>
          </div>
          
          
          

          <div>
          {token ? (
            
            <div className='flex items-center'>

 {user?.user_type === 'admin' ? (
              <nav class="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
        <Link href="./AdminHome">
        <button role="tab" type="button"
            class="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
            aria-selected="">
            Admin
        </button>
        </Link>
              </nav>
) : (
  <span></span> // 
                        )}
              <nav
        class="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
        <button role="tab" type="button"
            class="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:text-white dark:bg-yellow-600"
            aria-selected="">
            {user?.name}
        </button>

        <button role="tab" type="button"
            class="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400"
            onClick={e => onSubmitChange(e)}
            >
            Logout
        </button>
    </nav>
                            
                            </div>
            
) : (
  
        <Link href="/login">
            <button className='py-2 px-6 mr-2 bg-black text-white rounded-3xl font-semibold'>Sing In</button>
            </Link>
             )}

          </div>
        </div>
        
      </div>
    </navbar>
    );
}
