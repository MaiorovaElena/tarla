import './Footer.scss';
import logo from '../../assets/icon/tarla.svg';
import x from '../../assets/icon/x.svg';
import facebook from '../../assets/icon/facebook.svg';
import inst from '../../assets/icon/inst.svg'



export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <div className='footer__logo'>
                <img src={logo} alt='logo icon' className='footer__logo-icon'/>
            </div>
            <div className='footer__messenger'>
                <div className='footer__messenger-nick'>
                    <h3 className='footer__messenger-text'>@tarlabakes</h3>
                </div>
                <div className='footer__messenger-lists'>
                    <img className='footer__messenger-list' src={x} alt='logo x'/>
                    <img className='footer__messenger-list' src={facebook} alt='logo facebook'/>
                    <img className='footer__messenger-list' src={inst} alt='logo inst'/>
                </div>
            </div>
        </div>
    </footer>
  )
}
