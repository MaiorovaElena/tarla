import './CartItem.scss';
import shoppinglist from '../../data/shoppinglist';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/cartSlice';

export default function CartItem({cartItem}) {
    const shoppinglists =shoppinglist.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
  return (
    <div className='cartitem'>
        <p className='cartitem__title'>{shoppinglists.title}</p>
        <p className='cartitem__quantity'>{cartItem.quantity} portion(s)</p>
        <p className='cartitem__price'>Price: {shoppinglists.price * cartItem.quantity} £</p>
        <span onClick={() => dispatch( removeItemFromCart({cartItemId: cartItem.id}))}><img className="cartitem__icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="мусор иконка"/></span>
    </div>
  )
}
