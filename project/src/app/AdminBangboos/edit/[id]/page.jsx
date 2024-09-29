'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Adminnavbar from '@/app/components/navbaradmin';

export default function EditBangboossPage() {
    const { id } = useParams();
    console.log(id);

    const router = useRouter();
    const [bangboosField, setBangboosField] = useState({
      bangboos_name: '',
      bangboos_img: '',
      bangboos_detail: '',
      rank_id: '',

    });
    console.log(id)
    console.log(bangboosField.bangboos_name)
    console.log(bangboosField.bangboos_img)
    console.log(bangboosField.bangboos_detail)
    console.log(bangboosField.rank_id)
  

    useEffect(() => {
        fetchBangboos();
    }, [id]);

    const fetchBangboos = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/bangboos/${id}`);
            const data = await response.json();
            if (response.ok) {
                console.log(data.bangboos);
                setBangboosField(data.bangboos);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "Something Wrong!"
            });
        }
    }

    const [newImage, setNewImage] = useState(null);

    const changeBangboosFieldHandler = (e) => {
        setBangboosField({
            ...bangboosField,
            [e.target.name]: e.target.value
        });
    }

    const ImageUpload = () => {
        document.getElementById('image').click();
      };
      
      const onfilechangeimage = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
        setBangboosField(prev => (
          { ...prev,
            bangboos_img: file,
           }
        ));
      }

    const onSubmitChange = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'PATCH');
        formData.append('bangboos_name', bangboosField.bangboos_name);
        formData.append('bangboos_img', bangboosField.bangboos_img); // รูปภาพจะถูกส่งใน FormData
        formData.append('bangboos_detail', bangboosField.bangboos_detail);
        formData.append('rank_id', bangboosField.rank_id);

        try {
            const response = await fetch(`http://localhost:8000/api/bangboos/${id}`, {
                method: 'POST',
                body: formData // แปลงข้อมูล roleField ให้เป็น JSON
            });
            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    text: data.message,
                });
                router.push('/AdminBangboos')
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

  return (
    <div>
        <Adminnavbar 
        content=
        <div>
        <section className="max-w-svh p-6 mx-auto bg-white rounded-md dark:bg-white mt-2">
      <h1 className="text-4xl font-bold text-yellow-500 capitalize dark:text-black">EDIT BANGBOO</h1>
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
        name="bangboos_name"
        placeholder="bangboos_name..."
        value={bangboosField.bangboos_name}
        onChange={e => changeBangboosFieldHandler(e)}
        className="form-control block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
</div>
  
  
<div class="form-group">
  <label name="rank_id"class="text-black dark:text-black">Rank</label>
  <select 
  name="rank_id" 
  id="rank_id" 
  onChange={e => changeBangboosFieldHandler(e)}
  class="form-control block w-full px-4 py-2 mt-2
   text-black bg-white border border-black rounded-md
    dark:bg-gray-800 dark:text-black dark:border-gray-600
     focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
  <option>--rank--</option>
{ranksData.length > 0 ? (
       ranksData.map((rank) => (
        <option key={rank.id} value={rank.id} selected={Number(rank.id) === Number(bangboosField.rank_id)}>{rank.rank_name}</option>
   ))
  ) : (
    <option>--rank--</option>
  )}   
  
  </select>

  </div>


<h1 className="text-xl font-bold text-black capitalize dark:text-black mt-4">Image</h1>
<div></div>
<div></div>

<div className="mb-5">
                        <label htmlFor="bangboos_img" className="block text-sm font-medium text-white">
                        bangboos_img
                        </label>
                        <div className='overflow-hidden w-[300px] h-[360px]' onClick={ImageUpload}>
                            {newImage ? ( 
                                <img className=' w-full h-full object-cover' src={URL.createObjectURL(bangboosField.bangboos_img)} alt="" />
                            ) : bangboosField.bangboos_img ? (
                                <img className="w-full " src={`http://localhost:8000/images/bangboo/${bangboosField.bangboos_img}`} alt="" />
                            ) : (
                                <img src='https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' alt='No Image' />
                            )}
                        </div>
                        <button 
                        className="mt-2 ml-16 text-xl text-black border hover:bg-yellow-600 bg-yellow-400 border-black py-2 px-6 gap-2 rounded inline-flex"
                        type="button" onClick={ImageUpload}>Upload Image</button>
                        <input
                            name='bangboos_img'
                            id='image'
                            hidden
                            type="file"
                            className="input input-bordered input-primary w-full max-w- text-black p-2"
                            placeholder="bangboos_img"
                            onChange={onfilechangeimage}
                        />
                    </div>


      </div>

      <div className="flex justify-end">
            <Link href="/AdminBangboos">
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
