'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function EditFactionsPage() {
    const { id } = useParams();
    console.log(id);

    const router = useRouter();
    const [factionField, setFactionField] = useState({
        slug_factions: '',
        factions_img: '',

    });
    console.log(id)
    console.log(factionField)

    useEffect(() => {
        fetchFaction();
    }, [id]);

    const fetchFaction = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/factions/${id}`);
            const data = await response.json();
            if (response.ok) {
                console.log(data.factions);
                setFactionField(data.factions);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Something Wrong!"
            });
        }
    }

    const [newImage, setNewImage] = useState(null);

    const changeFactionFieldHandler = (e) => {
        setFactionField({
            ...factionField,
            [e.target.name]: e.target.value
        });
    }

    const ImageUpload = () => {
        document.getElementById('image').click();
      };
      
      const onfilechangeimage = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
        setFactionField(prev => (
          { ...prev,
            factions_img: file,
           }
        ));
      }

    const onSubmitChange = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('slug_factions', factionField.slug_factions);
        formData.append('factions_img', factionField.factions_img); // รูปภาพจะถูกส่งใน FormData

        try {
            const response = await fetch(`http://localhost:8000/api/factions/${id}`, {
                method: 'POST',
                body: formData // แปลงข้อมูล roleField ให้เป็น JSON
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                router.push('/AdminFactions')
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
      <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">EDIT FACTION</h1>
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
        name="slug_factions"
        placeholder="slug_factions..."
        value={factionField.slug_factions}
        onChange={e => changeFactionFieldHandler(e)}
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
</div>
  
<div></div>

<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Image</h1>
<div></div>
<div></div>

<div className="mb-5">
                        <label htmlFor="factions_img" className="block text-sm font-medium text-white">
                        factions_img
                        </label>
                        <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
                            {newImage ? ( 
                                <img className=' w-full h-full object-cover' src={URL.createObjectURL(factionField.factions_img)} alt="" />
                            ) : factionField.factions_img ? (
                                <img className="w-full " src={`http://localhost:8000/images/icon/${factionField.factions_img}`} alt="" />
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
            <Link href="/AdminFactions">
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
