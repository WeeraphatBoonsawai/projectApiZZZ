'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import EditPlayablescard from '@/app/components/editPlayablescard';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function EditPlayablesPage() {
    const { id } = useParams();
    console.log(id);
    
    const[loading,setLoading]=useState(true);

    const router = useRouter();
    const [playableField, setPlayablesField] = useState({
        agents_name: "",
        birthdate: "",
        profile: "",
        specialty: "",
        attribute: "",
        agents_icon: "",
        slug_factions: "",
        slug_img: "",
        bangboos_id: "",
        gender_id: "",
        rank_id: "",
    });
    console.log(id)
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

    useEffect(() => {
        fetchPlayables();
    }, [id]);

    const fetchPlayables = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/playables/${id}`);
            const data = await response.json();
            if (response.ok) {
                console.log(data.playables);
                setPlayablesField(data.playables);

                setLoading(false)
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Something Wrong!"
            });
        }
    }

    const [newImage, setNewImage] = useState(null);

    const changePlayablesFieldHandler = (e) => {
        setPlayablesField({
            ...playableField,
            [e.target.name]: e.target.value
        });
    }

    const ImageUpload = () => {
        document.getElementById('image').click();
      };
      
      const onfilechangeimage = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
        setPlayablesField(prev => (
          { ...prev,
            agents_icon: file,
           }
        ));
      }

    const onSubmitChange = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
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
            const response = await fetch(`http://localhost:8000/api/playables/${id}`, {
                method: 'POST',
                body: formData // แปลงข้อมูล roleField ให้เป็น JSON
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                router.push('/AdminPlayables')
            } else if (data.stetus === 422) {
                setError(data.errors);
                console.log(data.errors)
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Something Wrong!"
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
            <section className="max-w-svh p-6 mx-auto bg-white rounded-md dark:bg-white mt-2">
        <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">EDIT PLAYABLE</h1>
        <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
        <h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Edit Detail</h1>
<div></div>
<div></div>

<div className="form-group">
        <label className="text-black dark:text-black">ID</label>
        <input 
        type="text" 
        name="id" 
        placeholder="id" 
        value={id}
        disabled
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
    </div>

<EditPlayablescard
dataplayble="agents_name"
placeholder="agents_name..."
values={playableField.agents_name}
onChange={e => changePlayablesFieldHandler(e)}
name="Name"
/>

<EditPlayablescard
dataplayble="birthdate"
placeholder="birthdate..."
values={playableField.birthdate}
onChange={e => changePlayablesFieldHandler(e)}
name="Birth Date"
/>

<EditPlayablescard
dataplayble="specialty"
placeholder="specialty..."
values={playableField.specialty}
onChange={e => changePlayablesFieldHandler(e)}
name="Specialty"
/>

<EditPlayablescard
dataplayble="attribute"
placeholder="attribute..."
values={playableField.attribute}
onChange={e => changePlayablesFieldHandler(e)}
name="Attribute"
/>

<div className="form-group">
      <label className="text-black dark:text-black" for="profile">Profile</label>
      <textarea 
      type="textarea" 
      name="profile" 
      placeholder="profile..." 
      value={playableField.profile}
      onChange={e => changePlayablesFieldHandler(e)}
      className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
  </div>

  <h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Slug</h1>
<div></div>
<div></div>

<EditPlayablescard
dataplayble="slug_img"
placeholder="slug_img..."
values={playableField.slug_img}
onChange={e => changePlayablesFieldHandler(e)}
name="Slug Image"
/>

<EditPlayablescard
dataplayble="slug_factions"
placeholder="slug_factions..."
values={playableField.slug_factions}
onChange={e => changePlayablesFieldHandler(e)}
name="Slug Factions"
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
        <option key={bangboos.id} value={bangboos.id} selected={Number(bangboos.id) === Number(playableField.bangboos_id)}>{bangboos.bangboos_name}</option>
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
   text-black bg-white border border-black rounded-md
    dark:bg-gray-800 dark:text-black dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--gender--</option>
{genderData.length > 0 ? (
       genderData.map((genders) => (
        <option key={genders.id} value={genders.id} selected={Number(genders.id) === Number(playableField.gender_id)}>{genders.gender_name}</option>
   ))
  ) : (
    <option>--gender--</option>
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
   text-black bg-white border border-black rounded-md
    dark:bg-gray-800 dark:text-black dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--rank--</option>
{ranksData.length > 0 ? (
       ranksData.map((rank) => (
        <option key={rank.id} value={rank.id} selected={Number(rank.id) === Number(playableField.rank_id)}>{rank.rank_name}</option>
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
                            {newImage ? ( 
                                <img className=' w-full h-full object-cover' src={URL.createObjectURL(playableField.agents_icon)} alt="" />
                            ) : playableField.agents_icon ? (
                                <img className="w-full " src={`http://localhost:8000/images/icon/${playableField.agents_icon}`} alt="" />
                            ) : (
                                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image' />
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
        Update
        </button>
        </div>
        </form>
        </section>
            </div>
            />
        </div>
    );
}