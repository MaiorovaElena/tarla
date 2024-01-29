import "./ChangeQuantity.scss";

const ChangeQuantity = ({ quantity, setQuantity }) => {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="sheet__quantity">
      <button className="sheet__quantity-btn" onClick={addQuantity}>
        +
      </button>
      <span className="sheet__quantity-num">{quantity}</span>
      <button className="sheet__quantity-btn" onClick={removeQuantity}>
        -
      </button>
    </div>
  );
};

export default ChangeQuantity;
