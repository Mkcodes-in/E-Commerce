import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TbLoader2 } from 'react-icons/tb';
import { BsStarHalf, BsStarFill, BsStar, BsShieldCheck, BsArrowRepeat, BsTruck } from 'react-icons/bs';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const proRating = (rating) => {
    const star = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        star.push(<BsStarFill key={i} className="w-5 h-5 text-yellow-400" />)
      } else if (rating >= i - 0.5) {
        star.push(<BsStarHalf key={i} className='w-5 h-5 text-yellow-400' />)
      } else {
        star.push(<BsStar key={i} className='w-5 h-5 text-yellow-400' />)
      }
    }
    return star;
  }

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className='flex flex-col items-center'>
    <TbLoader2 className='animate-spin' size={28} stroke='green' />
    <p className='text-gray-600 mt-2'>Loading Products...</p>
  </div>;

  return (
    <div className="py-26 max-w-7xl mx-auto px-8 sm:px-6 md:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product images */}
        <div className="space-y-4">
          <div className='relative rounded-2xl overflow-hidden bg-gray-100 h-96'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        {/* Product Details */}
        <div className='space-y-6'>
          {/* Product Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
          </div>
          {/* Product Rating */}
          <div className='flex items-center gap-1 mt-2'>
            {proRating(product.rating)}
            <span className="pl-4 text-gray-600">{product.rating} • {product.reviews?.length || 0} reviews</span>
          </div>
          {/* Product Price */}
          <div>
            <div className="py-4">
              <div className="flex items-baseline mb-2">
                <span className="text-3xl font-bold text-green-600 mr-3">₹{product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-lg text-gray-500 line-through">
                    ₹{(product.price + (product.price * product.discountPercentage / 100)).toFixed(2)}
                  </span>
                )}
              </div>
              {product.discountPercentage > 0 && (
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Save {Math.round(product.discountPercentage)}%
                </span>
              )}
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          {/* Product About */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-medium capitalize">{product.category}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Brand</p>
              <p className="font-medium">{product.brand}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Availability</p>
              <p className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">SKU</p>
              <p className="font-medium">{product.sku || 'N/A'}</p>
            </div>
          </div>
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center text-gray-600">
              <BsTruck className="mr-3 text-blue-500" size={20} />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm">Free shipping on orders over ₹1000</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <BsArrowRepeat className="mr-3 text-blue-500" size={20} />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm">30-day hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <BsShieldCheck className="mr-3 text-blue-500" size={20} />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm">Your payment information is safe with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Reviews */}
    </div>
  );
}
