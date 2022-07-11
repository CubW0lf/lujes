import styles from "./SliderHighlight.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const SliderHighlight = () => {
  const slider = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ repeat: -1, repeatRefresh: true, defaults: { duration: 6 } })
      .fromTo(slider.current, { x: 700 }, { x: 0 })
      .fromTo(slider.current, { x: 0 }, { x: -700, delay: 4 })
      .fromTo(slider.current, { x: -700 }, { x: -1400 })
      .fromTo(slider.current, { x: -1400 }, { x: -2100, delay: 4 })
      .fromTo(slider.current, { x: -2100 }, { x: -2800 })
      .fromTo(slider.current, { x: -2800 }, { x: -3500, delay: 4 })
      .fromTo(slider.current, { x: -3500 }, { x: -4200 })
      .restart();
    return () => {
      tl.current.kill();
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <div className={styles.slider} ref={slider}>
          <div>Bienvenue sur Lujes</div>
          <div>Livraison offerte à partir de 100 €uros d&apos;achat</div>
          <div>Découvrez Tous les services</div>
        </div>
      </div>
    </div>
  );
};

export default SliderHighlight;
