import './Lists.scss';

export default function Lists({icon, title, text}) {
  return (
    <div className='lists'>
        <img src={`/images/${icon}.jpg`} alt={icon} className='lists__img'/>
        <h3 className='lists__title'>{title}</h3>
        <p className='lists__text'>{text}</p>
    </div>
  )
}
