import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

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

  return (
    <div>
      <Card 
      products={products}
      loader={loader}
      />
    </div>
  )
}
