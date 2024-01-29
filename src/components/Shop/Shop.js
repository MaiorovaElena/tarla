import './Shop.scss';
import shoppinglist from '../../data/shoppinglist';
import Sheet from '../Sheet/Sheet';


export default function Shop({forwardedRef}) {
  return (
    <section className='shop' ref={forwardedRef} >
        <h2 className='shop__title'>Shop pastry kits</h2>
        <div className='shop__sheet'>
            {shoppinglist.map((item)=> <Sheet key={item.id} item={item}/>)}
        </div>
    </section>
  )
}
