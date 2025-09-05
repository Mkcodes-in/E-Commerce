import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbLoader2 } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import CategoryFetch from '../components/CategoryFetch';

export default function Category() {
    const [catData, setCatData] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const base_url = "https://fakestoreapi.com/products/categories";
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoader(true);
                const res = await axios.get(base_url);
                setCatData(res.data);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoader(false);
            }
        }
        fetchCategory();
    }, []);

    // console.log(catData)
    return (
        <section className='z-30 max-w-7xl mx-auto px-8 sm:px-6 md:px-4'>
            {loader ? (
                <div className='grid place-content-center h-screen'>
                    <div className='flex flex-col items-center'>
                        <TbLoader2 className='animate-spin' size={28} stroke='green' />
                        <p className='text-gray-600 mt-2'>Loading Products...</p>
                    </div>
                </div>
            ) : (
                <div className='py-28'>
                    {catData.map(item => (
                        <Link
                            className='flex cursor-pointer'
                            key={item}
                            to={`/categories/${item}`}>
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}
