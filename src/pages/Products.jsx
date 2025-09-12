import Card from '../components/Card';
import { UseProduct } from '../context/UseProducts';

export default function Products() {
  const {products, loader} = UseProduct();
  return (
    <div>
      <Card 
      products={products}
      loader={loader}
      />
    </div>
  )
}
