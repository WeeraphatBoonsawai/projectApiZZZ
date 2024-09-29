'use client';
import React, { useState, useContext } from 'react'
import Link from "next/link";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';

export default function Login() {
  const { setUser, setToken } = useContext(UserContext);
  const router = useRouter();
  const [error, setError] = useState([]);
  const [field, setField] = useState({
    email: "",
    password: "",
  });

  const changeFieldHandler = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    });
  }
  console.log(field);
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/login`, {
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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (

<div class="bg-gray-100 flex justify-center items-center h-screen">

<div class="w-1/2 h-screen hidden lg:block">
  <img src="https://media.tenor.com/eLbxMGs0wp0AAAAi/anby-demara-nicole-demara.gif" alt="Placeholder Image" class="object-cover w-full h-full" />
</div>

<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
<h1 class="mt-2 text-2xl font-semibold mb-4 text-center">Login</h1>
<form action="">

<div class="mb-4">
<label htmlFor="email" className="block text-gray-600">email</label>
<input 
id="email" placeholder="email" type="email" autocapitalize="none"
autocomplete="email" autocorrect="off" name="email"
onChange={e => changeFieldHandler(e)}
class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
/>
</div>

<div class="mb-4">
<label htmlFor="password" className="block text-gray-600">password</label>
<input 
 id="email" placeholder="password" type="password" autocapitalize="none"
 autocomplete="password" autocorrect="off" name="password"
 onChange={e => changeFieldHandler(e)}
 class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
/>
</div>
<div class="mb-6 text-blue-500">
      <Link href="/register" class="hover:underline">Register</Link>
    </div>
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full' type='submit' onClick={e => onSubmitChange(e)}>login</button>
</form>
</div>

</div>
  )
}
