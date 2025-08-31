import './Bg.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Bg = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="bg fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    )
  } else if (heroCount === 0) {
    return <img src={image1} className="bg fade-in" alt="background " />
  } else if (heroCount === 1) {
    return <img src={image2} className="bg fade-in" alt="background 2" />
  } else if (heroCount === 2) {
    return <img src={image3} className="bg fade-in" alt="background 3" />
  }

  return null; 
};

export default Bg;
