'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import CreatePlayablescard from '@/app/components/createPlayablescard';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function CreateAgentsImagePage() {
    const [agentsimagesField, setAgentsimagesField] = useState({
        slug_img: '',
        agents_img: '',
    });

    const [agentsimagesImage, setAgentsimagesImage] = useState(null);

    const [error, setError] = useState([]);
    const router = useRouter();
    
    const changeAgentsimagesFieldHandler = (e) => {
        setAgentsimagesField({
            ...agentsimagesField,
            [e.target.name]: e.target.value
        });
    }
    console.log(agentsimagesField.slug_img)
    console.log(agentsimagesField.agents_img)
    console.log(agentsimagesImage)
    
    const ImageUpload = () => {
      document.getElementById('image').click();
    };
    
    const onfilechangeimage = (e) => {
      const file = e.target.files[0];
      setAgentsimagesField(prev => (
        { ...prev,
            agents_img: file,
         }
      ));
    }

    const onSubmitChange = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('slug_img', agentsimagesField.slug_img);
      formData.append('agents_img', agentsimagesField.agents_img); 

    
      try {
        const response = await fetch(`http://localhost:8000/api/agentsimages`,{
          method: 'POST',
          body: formData, 
        });
    
        const data = await response.json(); 
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: data.message, 
          });
          router.push('/AdminAgentsimages');
        } else if (data.status === 422) {
          setError(data.errors);
          console.log(data.errors);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: "Something went wrong!" 
        });
      }
    }

  return (
    <div>

<Adminnavbar 
content=
<div>
<section className="max-w-svh p-6 mx-auto bg-white rounded-md dark:bg-white mt-2">
      <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">CREATE IMAGE</h1>
      <form> 
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
      <h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Detail</h1>
<div></div>
<div></div>

<CreatePlayablescard
dataplayble="slug_img"
placeholder="slug_img...."
name="Slug Name"
onChange={e => changeAgentsimagesFieldHandler(e)}
/>
<div></div>
<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Image</h1>
<div></div>
<div></div>

<div className="mb-5">
          <label htmlFor="agents_img" className="block text-sm font-medium text-white">
          agents_img
          </label>
          <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
          {agentsimagesField.agents_img ? (
               <img className=' w-full h-full object-cover' src={URL.createObjectURL(agentsimagesField.agents_img)} alt="" />
              ) : (
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image'/> 
              )}
          </div>
          <button 
          className="mt-2 ml-16 text-xl text-black border hover:bg-yellow-600 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex"
          type="button" onClick={ImageUpload}>Upload Image</button>
          <input
          name='agents_img'
          id='image'
          hidden
            type="file"
            className="input input-bordered input-primary w-full max-w- text-black p-2"
            placeholder="agents_img"
            onChange={onfilechangeimage}
          />
        </div>


      </div>

      <div className="flex justify-end">
<Link href="/AdminAgentsimages">
<button 
      className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-rose-600 rounded-md hover:bg-rose-700 focus:outline-none focus:bg-gray-600">
        Cancel
        </button>
  </Link>

      <button onClick={e => onSubmitChange(e)} type="submit" 
      className="ml-2 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">
        Submit
        </button>


  </div>

      </form>
      </section>
</div>
/>
      

    </div>
  )
}
