'use client';
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import Link from "next/link";

export default function Register() {
    const { setUser, setToken } = useContext(UserContext);
    const router = useRouter();
    const [field, setField] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const changeFieldHandler = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    }
    console.log(field);

    const [error, setError] = useState([]);
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(field),
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    text: data.message,
                });
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user_name', data.user.name);
                setUser(data.user);
                setToken(data.token);
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
        <div>
<div class="bg-gray-100 flex justify-center items-center h-screen">
<div class="w-1/2 h-screen hidden lg:block">
  <img src="https://i.pinimg.com/564x/18/67/ab/1867ab8f470da9b828e3ac7acf3cc0be.jpg" alt="Placeholder Image" class="object-cover w-full h-full" />
</div>

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
<h1 class="mt-2 text-2xl font-semibold mb-4 text-center">Register</h1>
<form action="">

<div class="mb-4">
<label htmlFor="name" className="block text-gray-600">Name</label>
<input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  id="name" placeholder="name" type="name" autocapitalize="none"
                  autocomplete="name" autocorrect="off" name="name"
                  onChange={e => changeFieldHandler(e)}
/>

</div>

<div class="mb-4">
<label htmlFor="email" className="block text-gray-600">Email</label>
<input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  id="email" placeholder="email" type="email" autocapitalize="none"
                  autocomplete="email" autocorrect="off" name="email"
                  onChange={e => changeFieldHandler(e)}
                />
                
</div>

<div class="mb-4">
<label htmlFor="password" className="block text-gray-600">Password</label>
<input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    id="email" placeholder="password" type="password" autocapitalize="none"
                    autocomplete="password" autocorrect="off" name="password"
                    onChange={e => changeFieldHandler(e)}
                  />
                  
</div>

<div class="mb-4">
<input class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    id="email" placeholder="Confirmation Password" type="password" autocapitalize="none"
                    autocomplete="password_confirmation" autocorrect="off" name="password_confirmation"
                    onChange={e => changeFieldHandler(e)}
                  />
                 
</div>

<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full' type='submit' onClick={e => onSubmitChange(e)}>Register</button>

</form>
<div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Sign up Here</a>
  </div>
</div>

</div>
        </div>

      
      
    )
}