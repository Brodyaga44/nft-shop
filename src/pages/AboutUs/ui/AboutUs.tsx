import img from "../../../shared/assets/about/about.jpg";
import styles from "./about.module.scss";
const AboutUs = () => {
  return (
    <div>
      <div className={styles.about}>
        <img src={img} alt="" className={styles.about__img}></img>
      </div>
    </div>
  );
};

export default AboutUs;
