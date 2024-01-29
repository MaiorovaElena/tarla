import "./Howitworks.scss";
import howitworks from "../../data/howitworks.json";
import Lists from "../Lists/Lists";

export default function Howitworks() {
  return (
    <section className="howitworks">
      <h2 className="howitworks__title">How it works</h2>
      <div className="howitworks__lists">
        {howitworks.map((howitwork) => (
          <Lists key={howitwork.id} {...howitwork} />
        ))}
      </div>
    </section>
  );
}
