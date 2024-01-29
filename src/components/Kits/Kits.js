import Pictures from "../Pictures/Pictures";
import "./Kits.scss";
import pastrykits from "../../data/pastry-kits";

import React, { useState } from "react";

export default function Kits({childScroll}) {
  const [indexPictures, setIndexPictures] = useState(0);

  function prevPict() {
    setIndexPictures((indexPictures) =>
      indexPictures <= 0 ? pastrykits.length - 1 : indexPictures - 1
    );
  }

  function nextPict() {
    setIndexPictures((indexPictures) =>
      indexPictures >= pastrykits.length - 1 ? 0 : indexPictures + 1
    );
  }

  return (
    <section className="kits">
      <div className="kits__info">
        <h2 className="kits__info-title">Fresh pastry kits</h2>
        <p className="kits__info-text">
          Bringing the smells and tastes of your favourite patisserie to your
          home. Our kits have everything you need to easily make killer pastries
          every time. We’ve done the tricky bits so all you need to do is roll,
          proof and bake!
        </p>
        <button className="kits__info-btn" onClick={childScroll}>Shop pastry kits</button>
      </div>
      <div className="kits__images">
        <Pictures key={indexPictures} {...pastrykits[indexPictures]} />
        <div>
          <button className="kits__images-btn" onClick={prevPict}>&#11013;</button>
          <button className="kits__images-btn" onClick={nextPict}>&#11157;</button>
        </div>
      </div>
    </section>
  );
}
