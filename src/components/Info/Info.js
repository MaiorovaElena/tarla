import './Info.scss';


export default function Info({icon, title,text}) {
  return (
    <div className='background__info'>
        <img src={`/info/${icon}.jpg`} alt={icon} className='background__info-img'/>
        <h3 className='background__info-title'>{title}</h3>
        <p className='background__info-text'>{text}</p>
    </div>
  )
}
