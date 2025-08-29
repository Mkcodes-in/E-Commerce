import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { TbLoader2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [activeHeart, setActiveHeart] = useState([]);
  const navigate = useNavigate();

  function handleHeart(id) {
    setActiveHeart(prev => {
      if(prev.includes(id)){
        return prev.filter(itemId => itemId !== id)
      }else{
        return [...prev, id];
      }
    })
  }
  const Base_Url = "https://dummyjson.com/products";
  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const { data } = await axios.get(Base_Url);
        setProducts(data.products);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  console.log(products)
  console.log(activeHeart)
  return (
    <section className='z-30 max-w-7xl mx-auto'>
      {loader ? (<div className='grid h-screen place-content-center items-center'>
        <TbLoader2 className='animate-spin' size={28} stroke='green' />
      </div>)
        :
        (<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-26">
          {products.map((item) => (
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              key={item.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <button
                onClick={() => handleHeart(item.id)}
                className='absolute top-2 right-2 text-red-500 cursor-pointer'>
                {activeHeart.includes(item.id) ? (<BsHeartFill size={20} />) : (<BsHeart size={20} />)}
              </button>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-600 font-bold text-xl">₹{item.price}</span>
                  <span className="text-yellow-500 font-semibold text-sm">
                    ⭐ {item.rating}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>)}

    </section>
  )
}
