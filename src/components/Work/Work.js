import "./Work.scss";
import video from '../../assets/video/production_id_4109585 (1080p).mp4';

export default function Work({forwardedRef2}) {
  return (
    <section className="work" ref={forwardedRef2}>
      <div className="work__nick">
        <h3 className="work__nick-text">@tarlabakes</h3>
      </div>
      <div className="work__video">
        <video autoPlay muted loop playsInline className="work__video-source"><source src={video} type="video/mp4" /></video>
      </div>
      <div className="work__info">
        <h3 className="work__info-title">Join our community</h3>
        <h4 className="work__info-text">and let's get baked</h4>
        <a className="work__info-mail" href="mailto:oven@180degrees.com">
          oven@180degrees.com
        </a>
      </div>
    </section>
  );
}
