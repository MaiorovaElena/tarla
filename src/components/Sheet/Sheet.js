import { useState } from 'react';
import ChangeQuantity from '../ChangeQuantity/ChangeQuantity';
import './Sheet.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice'


export default function Sheet({item}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  return (
    <div className='sheet'>
        <img src={`/shop/${item.image}.jpg`} alt={item.image} className='sheet__img'/>
        <h3 className='sheet__title'>{item.title}</h3>
        <p className='sheet__price'>£ {item.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className='sheet__btn' onClick={()=>{dispatch(addItemToCart({item, quantity}))}}>Add to cart</button>
    </div>
  )
}
