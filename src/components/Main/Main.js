import Howitworks from "../Howitworks/Howitworks";
import Kits from "../Kits/Kits";
import Bread from "../Bread/Bread"
import "./Main.scss";
import Shop from "../Shop/Shop";
import Background from "../Background/Background";
import Work from "../Work/Work";
// import Modal from "../Modal/Modal";


export default function Main({forwardedRef, forwardedRef2, childScroll}) {
  return (
    <main className="main">
      <div className="main__container container">
        <Kits childScroll={childScroll}/>
        <Howitworks/>
        <Bread/>
        <Shop forwardedRef={forwardedRef} />
        <Background/>
        <Work forwardedRef2={forwardedRef2}/>
      </div>
    </main>
  );
}
