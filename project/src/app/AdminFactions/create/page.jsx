'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import CreatePlayablescard from '@/app/components/createPlayablescard';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function CreateFactionsPage() {
    const [factionsField, setFactionsField] = useState({
        slug_factions: '',
        factions_img: '',
    });

    const [factionsImage, setFactionsImage] = useState(null);

    const [error, setError] = useState([]);
    const router = useRouter();
    
    const changeFactionsFieldHandler = (e) => {
        setFactionsField({
            ...factionsField,
            [e.target.name]: e.target.value
        });
    }
    console.log(factionsField.slug_factions)
    console.log(factionsField.factions_img)
    console.log(factionsImage)
    
    const ImageUpload = () => {
      document.getElementById('image').click();
    };
    
    const onfilechangeimage = (e) => {
      const file = e.target.files[0];
      setFactionsField(prev => (
        { ...prev,
            factions_img: file,
         }
      ));
    }

    const onSubmitChange = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('slug_factions', factionsField.slug_factions);
      formData.append('factions_img', factionsField.factions_img); 

    
      try {
        const response = await fetch(`http://localhost:8000/api/factions`,{
          method: 'POST',
          body: formData, 
        });
    
        const data = await response.json(); 
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: data.message, 
          });
          router.push('/AdminFactions');
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
      <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">CREATE FACTION</h1>
      <form> 
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
      <h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Detail</h1>
<div></div>
<div></div>

<CreatePlayablescard
dataplayble="slug_factions"
placeholder="slug_factions...."
name="Faction Name"
onChange={e => changeFactionsFieldHandler(e)}
/>
<div></div>
<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Image</h1>
<div></div>
<div></div>

<div className="mb-5">
          <label htmlFor="factions_img" className="block text-sm font-medium text-white">
          factions_img
          </label>
          <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
          {factionsField.factions_img ? (
               <img className=' w-full h-full object-cover' src={URL.createObjectURL(factionsField.factions_img)} alt="" />
              ) : (
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image'/> 
              )}
          </div>
          <button 
          className="mt-2 ml-16 text-xl text-black border hover:bg-yellow-600 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex"
          type="button" onClick={ImageUpload}>Upload Image</button>
          <input
          name='factions_img'
          id='image'
          hidden
            type="file"
            className="input input-bordered input-primary w-full max-w- text-black p-2"
            placeholder="factions_img"
            onChange={onfilechangeimage}
          />
        </div>


      </div>

      <div className="flex justify-end">
<Link href="/AdminFactions">
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
