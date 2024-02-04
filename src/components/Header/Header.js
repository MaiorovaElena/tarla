import "./Header.scss";
import logo from "../../assets/icon/tarla.svg";
import cart from "../../assets/icon/cart.svg";



export default function Header({totalPrice, exeScroll, scrollToBlock, setOpen}) {


  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__menu">
          <div className="header__logo">
            <img src={logo} alt="logo" className="header__logo-img" />
          </div>
          <div className="header__category">
            <nav className="header__category-nav">
              <li className="header__category-li" onClick={exeScroll}>
                Shop
              </li>
              <li className="header__category-li" onClick={scrollToBlock}>
                Contact
              </li>
            </nav>
          </div>
        </div>
        <div className="header__cart">
          <img
            className="header__cart-img"
            src={cart}
            alt="logo cart"
            onClick={() => setOpen(true)}
          />
          <p className="header__cart-text">Total: £ {totalPrice}</p>
        </div>
      </div>
    </header>
  );
}
