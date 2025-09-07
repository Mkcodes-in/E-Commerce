import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbLoader2 } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import CategoryFetch from '../components/CategoryFetch';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { categoryData } from '../Data/CategoryData';

export default function Category() {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setLoader(true);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoader(false);
            }
        }
        fetchCategory();
    }, []);

    return (
        <section className="py-26 max-w-7xl mx-auto px-8 sm:px-6 md:px-4">
            <button
                onClick={() => { navigate(-1) }}
                className='flex items-center gap-3 my-4 cursor-pointer text-sm hover:text-gray-800 transition-colors ease-in duration-300'>
                <BsArrowLeft /> Back to Products
            </button>
            {loader ? (
                <div className='flex items-center justify-center py-36'>
                    <div className='flex flex-col items-center'>
                        <TbLoader2 className='animate-spin' size={28} stroke='green' />
                        <p className='text-gray-600 mt-2'>Loading Products...</p>
                    </div>
                </div>
            ) : (
                <div className="z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
                    {categoryData.map(item => (
                        <Link
                            key={item.name}
                            to={`/categories/${(item.name).toLowerCase()}`}
                            className="group relative block overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
                        >
                            {/* Image container with overlay effect */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src={item.image}
                                    alt={item.name}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Premium badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Premium
                                </div>
                            </div>

                            {/* Content container */}
                            <div className="relative p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>

                                {/* CTA button */}
                                <div className="flex items-center text-green-700 font-medium text-sm">
                                    <span>Explore Collection</span>
                                    <span className='className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-center'><BsArrowRight /></span>
                                </div>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine transition-all duration-700"></div>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}
