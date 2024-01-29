import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import "./Modal.scss";
import CartItem from "../CartItem/CartItem";

export default function Modal({ onClose, isOpen }) {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__content">
              <button className="modal__btn" onClick={() => onClose()}>
                X
              </button>
              <p className="modal__content-total"><b>Total:</b> £ {totalPrice}</p>

              {cartItems.map((cartItem, index) =>(<CartItem key={index} cartItem={cartItem}/>))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
