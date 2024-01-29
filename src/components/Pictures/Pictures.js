import './Pictures.scss';


export default function Pictures({picture}) {

  return (
    <div className='kits__image'>
        <img src={`/pastry-kits/${picture}.jpg`} alt={`${picture}`} className='kits__image-img'/>
    </div>
  )
}
