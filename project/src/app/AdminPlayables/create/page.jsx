'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import CreatePlayablescard from '@/app/components/createPlayablescard';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function CreatePlayablesPage () {
    const [playableField, setPlayablesField] = useState({
        agents_name: '',
        birthdate: '',
        profile: '',
        specialty: '',
        attribute: '',
        agents_icon: '',
        slug_factions: '',
        slug_img: '',
        bangboos_id: '',
        gender_id: '',
        rank_id: '',
    });

    const [playableImage, setPlayablesImage] = useState(null);

    const [error, setError] = useState([]);
    const router = useRouter();
    
    const changePlayablesFieldHandler = (e) => {
        setPlayablesField({
            ...playableField,
            [e.target.name]: e.target.value
        });
    }
    console.log(playableField.agents_name)
    console.log(playableField.birthdate)
    console.log(playableField.profile)
    console.log(playableField.specialty)
    console.log(playableField.attribute)
    console.log(playableField.agents_icon)
    console.log(playableField.slug_factions)
    console.log(playableField.slug_img)
    console.log(playableField.bangboos_id)
    console.log(playableField.gender_id)
    console.log(playableField.rank_id)
    console.log(playableImage)
    
    const ImageUpload = () => {
      document.getElementById('image').click();
    };
    
    const onfilechangeimage = (e) => {
      const file = e.target.files[0];
      setPlayablesField(prev => (
        { ...prev,
            agents_icon: file,
         }
      ));
    }

    const onSubmitChange = async (e) => {
      e.preventDefault();
    
      const formData = new FormData();
      formData.append('agents_name', playableField.agents_name);
      formData.append('birthdate', playableField.birthdate);
      formData.append('profile', playableField.profile);
      formData.append('specialty', playableField.specialty);
      formData.append('attribute', playableField.attribute);
      formData.append('agents_icon', playableField.agents_icon); 
      formData.append('slug_factions', playableField.slug_factions);
      formData.append('slug_img', playableField.slug_img);
      formData.append('bangboos_id', playableField.bangboos_id);
      formData.append('gender_id', playableField.gender_id);
      formData.append('rank_id', playableField.rank_id);
    
      try {
        const response = await fetch(`http://localhost:8000/api/playables`,{
          method: 'POST',
          body: formData, 
        });
    
        const data = await response.json(); 
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: data.message, 
          });
          router.push('/AdminPlayables');
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

    const [ranksData, setRanksData] = useState([]);
    console.log(ranksData);
    
    useEffect(() => {
      fetchRanks();
      fetchBangboo();
      fetchGender();
    }, [])

    const fetchRanks = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/ranks`);
        const data = await response.json();
        console.log(data);
        console.log(ranksData);
        if (response.ok) {
          setRanksData(data.rank);
          console.log(data.rank);

          console.log(response);

        }
        console.log(response.rank);
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error,
        });
      }
    }

    const [bangbooData, setBangbooData] = useState([]);

  const fetchBangboo = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/bangboos`);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setBangbooData(data.bangboos);
        console.log(data.bangboos);
        console.log(response);
      }
      console.log(response.bangboos);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error,
      });
    }
  }

  const [genderData, setGenderData] = useState([]);

  const fetchGender = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/genders`);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setGenderData(data.gender);
        console.log(data.gender);
        console.log(response);
      }
      console.log(response.gender);
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error,
      });
    }
  }
   
  return (
    <div>
    <Adminnavbar 
    content=
    <div>
    <section className="max-w-svh p-6 mx-auto bg-white rounded-md dark:bg-white mt-2">
        <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">CREATE PLAYABLE</h1>
        <form> 
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
            
        <h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Detail</h1>
<div></div>
<div></div>

<CreatePlayablescard
dataplayble="agents_name"
placeholder="agents_name...."
name="Name"
onChange={e => changePlayablesFieldHandler(e)}
/>

<CreatePlayablescard
dataplayble="birthdate"
placeholder="birthdate...."
name="Birth Date"
onChange={e => changePlayablesFieldHandler(e)}
/>

<CreatePlayablescard
dataplayble="specialty"
placeholder="specialty...."
name="Specialty"
onChange={e => changePlayablesFieldHandler(e)}
/>

<CreatePlayablescard
dataplayble="attribute"
placeholder="attribute...."
name="Attribute"
onChange={e => changePlayablesFieldHandler(e)}
/>

<div className="form-group">
  <label htmlFor="profile" className="text-black dark:text-black" for="profile">Profile</label>
  <textarea 
  type="textarea" 
  name="profile"
  id="profile"
  placeholder="profile.."
  onChange={e => changePlayablesFieldHandler(e)}
  className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  </textarea>
</div>


<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Slug</h1>
<div></div>
<div></div>

<CreatePlayablescard
dataplayble="slug_img"
placeholder="slug_img...."
name="Slug Image"
onChange={e => changePlayablesFieldHandler(e)}
/>

<CreatePlayablescard
dataplayble="slug_factions"
placeholder="slug_factions...."
name="Slug Faction"
onChange={e => changePlayablesFieldHandler(e)}
/>

<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Other</h1>
<div></div>
<div></div>

<div class="form-group">
  <label name="bangboos_id"class="text-black dark:text-black">Bangboos</label>
  <select 
  name="bangboos_id" 
  id="bangboos_id" 
  onChange={e => changePlayablesFieldHandler(e)}
  class="form-control block w-full px-4 py-2 mt-2
   text-gray-700 bg-white border border-gray-300 rounded-md
    dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--bangboo--</option>
{bangbooData.length > 0 ? (
       bangbooData.map((bangboos) => (
        <option key={bangboos.id} value={bangboos.id}>{bangboos.bangboos_name}</option>
   ))
  ) : (
    <option>--bangboo--</option>
  )}   
  
  </select>

  </div>

  <div class="form-group">
  <label name="gender_id"class="text-black dark:text-black">Gender</label>
  <select 
  name="gender_id" 
  id="gender_id" 
  onChange={e => changePlayablesFieldHandler(e)}
  class="form-control block w-full px-4 py-2 mt-2
   text-gray-700 bg-white border border-gray-300 rounded-md
    dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--Gender--</option>
{genderData.length > 0 ? (
       genderData.map((genders) => (
        <option key={genders.id} value={genders.id}>{genders.gender_name}</option>
   ))
  ) : (
    <option>--Gender--</option>
  )}   
  
  </select>

  </div>

<div class="form-group">
  <label name="rank_id"class="text-black dark:text-black">Rank</label>
  <select 
  name="rank_id" 
  id="rank_id" 
  onChange={e => changePlayablesFieldHandler(e)}
  class="form-control block w-full px-4 py-2 mt-2
   text-gray-700 bg-white border border-gray-300 rounded-md
    dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--rank--</option>
{ranksData.length > 0 ? (
       ranksData.map((rank) => (
        <option key={rank.id} value={rank.id}>{rank.rank_name}</option>
   ))
  ) : (
    <option>--rank--</option>
  )}   
  
  </select>

  </div>

<div className="mb-5">
          <label htmlFor="agents_icon" className="block text-sm font-medium text-white">
            agents_icon
          </label>
          <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
          {playableField.agents_icon ? (
               <img className=' w-full h-full object-cover' src={URL.createObjectURL(playableField.agents_icon)} alt="" />
              ) : (
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image'/> 
              )}
          </div>
          <button 
          className="mt-2 ml-16 text-xl text-black border hover:bg-yellow-600 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex"
          type="button" onClick={ImageUpload}>Upload Image</button>
          <input
          name='agents_icon'
          id='image'
          hidden
            type="file"
            className="input input-bordered input-primary w-full max-w- text-black p-2"
            placeholder="agents_icon"
            onChange={onfilechangeimage}
          />
        </div>


        </div>
        <div className="flex justify-end">
<Link href="/AdminPlayables">
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
  );
};