import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import "./App.scss";

import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";

import Header from "../Header/Header";

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
      <Header totalPrice={totalPrice} exeScroll={exeScroll} scrollToBlock={scrollToBlock} setOpen={setOpen}/>
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
