import './Background.scss';
import background from '../../assets/img/background.jpg';
import Info from '../Info/Info';
import infotarla from '../../data/infotarla.json';



export default function Background() {
  return (
    <section className='background'>
        <div className='background__photo'>
            <img src={background} alt='background' className='background__photo-img'/>
        </div>
        <div className='background__information'>
            {infotarla.map((back) => <Info key={back.id} {...back}/>)}
        </div>
    </section>
  )
}
