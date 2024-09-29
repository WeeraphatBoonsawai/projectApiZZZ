'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function EditAgentsImagePage() {
    const { id } = useParams();
    console.log(id);

    const router = useRouter();
    const [agentsimagesField, setAgentsimagesField] = useState({
        slug_img: '',
        agents_img: '',

    });
    console.log(id)
    console.log(agentsimagesField.slug_img)
    console.log(agentsimagesField.agents_img)
  

    useEffect(() => {
        fetchAgentsimages();
    }, [id]);

    const fetchAgentsimages = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/agentsimages/${id}`);
            const data = await response.json();
            if (response.ok) {
                console.log(data.agentsimages);
                setAgentsimagesField(data.agentsimages);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Something Wrong!"
            });
        }
    }

    const [newImage, setNewImage] = useState(null);

    const changeAgentsimagesFieldHandler = (e) => {
        setAgentsimagesField({
            ...agentsimagesField,
            [e.target.name]: e.target.value
        });
    }

    const ImageUpload = () => {
        document.getElementById('image').click();
      };
      
      const onfilechangeimage = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
        setAgentsimagesField(prev => (
          { ...prev,
            agents_img: file,
           }
        ));
      }

    const onSubmitChange = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('slug_img', agentsimagesField.slug_img);
        formData.append('agents_img', agentsimagesField.agents_img); // รูปภาพจะถูกส่งใน FormData

        try {
            const response = await fetch(`http://localhost:8000/api/agentsimages/${id}`, {
                method: 'POST',
                body: formData // แปลงข้อมูล roleField ให้เป็น JSON
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                router.push('/AdminAgentsimages')
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

  return (
    <div>
        <Adminnavbar 
        content=
        <div>
        <section className="max-w-svh p-6 mx-auto bg-white rounded-md dark:bg-white mt-2">
      <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">EDIT IMAGE</h1>
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

    <div className="form-group">
        <label className="text-black dark:text-black">Name</label>
        <input 
        type="text" 
        name="slug_img"
        placeholder="slug_img..."
        value={agentsimagesField.slug_img}
        onChange={e => changeAgentsimagesFieldHandler(e)}
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
</div>
  
<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Image</h1>
<div></div>
<div></div>

<div className="mb-5">
                        <label htmlFor="agents_img" className="block text-sm font-medium text-white">
                        agents_img
                        </label>
                        <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
                            {newImage ? ( 
                                <img className=' w-full h-full object-cover' src={URL.createObjectURL(agentsimagesField.agents_img)} alt="" />
                            ) : agentsimagesField.agents_img ? (
                                <img className="w-full " src={`http://localhost:8000/images/gallery/${agentsimagesField.agents_img}`} alt="" />
                            ) : (
                                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image' />
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
            <Link href="/AdminAgentsimages">
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
  )
}
