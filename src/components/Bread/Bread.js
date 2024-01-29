import './Bread.scss';
import bread from '../../assets/img/bread.png';

export default function Bread() {
  return (
    <section className='bread'>
        <div className='bread__photo'>
            <img src={bread} alt='bread' className='bread__photo-img'/>
        </div>
        <div className='bread__text'>
            <p className='bread__text-p'>Freshly baked means fresh bakery smells filling your home, warm oozey pastries on your plates, and never needing to get out of your PJs.</p>
        </div>
    </section>
  )
}
