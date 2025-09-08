import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function CategoryDetails() {
    const { category, id } = useParams();
    console.log(id)
    console.log(category)
    // function getProductDetails() {
    //     const base_url = `https://fakestoreapi.com/products/${id}`;
    //     const res = axios.get(base_url);
    //     console.log(res.data);
    // }
    // getProductDetails();
    return (
        <div>CategoryDetails</div>
    )
}

// In your routing file
// <Route path='/Categories/:category/:id' element={<CategoryDetails />} />
