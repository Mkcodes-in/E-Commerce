import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} className="h-60 mb-4" />
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-green-600 font-semibold">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
    </div>
  );
}
