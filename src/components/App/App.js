import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.scss";
// import "../Header/Header.scss";
import logo from "../../assets/icon/tarla.svg";
import cart from "../../assets/icon/cart.svg";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";

function App() {
  const [open, setOpen] = useState(false);

  const totalPrice = useSelector(getTotalPrice);

  const myRef = useRef(null);
  const myRefTwo = useRef(null);

  const exeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth" });
  function scrollToBlock() {
    myRefTwo.current.scrollIntoView({ behavior: "smooth" });
  }

  function childScroll() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
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
      <Modal isOpen={open} onClose={() => setOpen(false)} />
      <Main
        forwardedRef={myRef}
        forwardedRef2={myRefTwo}
        childScroll={childScroll}
      />
      <Footer />
    </>
  );
}

export default App;
