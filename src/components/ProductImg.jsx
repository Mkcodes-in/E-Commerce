import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function ProductImg({ product }) {
    const [image, setImage] = useState(0);
    const hanldeNext = () => {
        if (product.images && image < product.images.length - 1) {
            setImage(image + 1);
        }
    }
    const hanldePrev = () => {
        if (image > 0) {
            setImage(image - 1);
        }
    }

    return (
        <div className='relative rounded-2xl overflow-hidden bg-gray-100 h-96'>
            <img
                src={product.images ? product.images[image] : product.thumbnail}
                alt={product.tilte}
                className='w-full h-full object-contain transition-all ease-in-out duration-300'
            />
            {product.images && product.images.length > 1 && (
                <div>
                    <button
                        onClick={hanldePrev}
                        disabled={image === 0}
                        className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all ${image === 0 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer`}
                    >
                        <BsChevronLeft className="w-5 h-5" /></button>
                    <button
                        onClick={hanldeNext}
                        disabled={image === product.images.length - 1}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all ${image === product.images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer`}
                    >
                        <BsChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    )
}
