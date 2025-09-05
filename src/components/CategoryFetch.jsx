import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoryFetch() {
    const [categoryData, setCategoryData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCategoryData() {
            try {
                setLoader(true);
                const base_url = `https://fakestoreapi.com/products/category/${category}`;
                const res = await axios.get(base_url);
                setCategoryData(res.data);
            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                setLoader(false);
            }
        }
        fetchCategoryData();
    }, [category]);
    console.log(categoryData)
    return (
        <section className='z-30 max-w-7xl mx-auto px-8 sm:px-6 md:px-4'>
            {loader ? (<div className='grid h-screen place-content-center items-center'>
                <div className='flex flex-col items-center'>
                    <TbLoader2 className='animate-spin' size={28} stroke='green' />
                    <p className='text-gray-600 mt-2'>Loading Products...</p>
                </div>
            </div>) :
                (<div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-26">
                    <button onClick={() => navigate(-1)} className='flex items-center justify-center gap-3 cursor-pointer'><BsArrowLeft /> Go Back</button>
                    {categoryData.map(item => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.tilte} />
                        </div>
                    ))}
                </div>
                )}
        </section>
    )
}
