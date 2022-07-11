import styles from "./Infos.module.css";
import truck from "../../public/assets/images/truck.webp";
import cart from "../../public/assets/images/cart.webp";
import service from "../../public/assets/images/service.webp";
import smile from "../../public/assets/images/smile.webp";
import clock from "../../public/assets/images/1h.webp";
import secure from "../../public/assets/images/secure.webp";
import phone from "../../public/assets/images/phone.gif";
import Image from "next/image";

const Infos = () => {
  console.log(phone);
  return (
    <div className={styles.container}>
      <div className={styles.networks}>
        <div className={styles.social}>
          <Image src={phone.src} alt="" className={styles.phone} layout="responsive" />
          <div className={styles.text}>
            <h2>#LUJESXME</h2>
            <h3>ON SE FOLLOW ?</h3>
            <p>
              Rejoignez la team sur les réseaux sociaux et ne ratez plus jamais les infos,
              <br />
              les nouveautés, les bons plans !
            </p>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h2>INSCRIVEZ-VOUS À LA NEWSLETTER</h2>
          <p>
            Pas trop réseaux sociaux ?<br />
            Vous pouvez aussi vous abonner à la newsletter !<br />
            Promis, on ne vous envoie que des emails que vous allez adorer.
          </p>
          <input type="text" placeholder="Votre adresse Email" />
          <span className={styles.ok}>ok</span>
        </div>
      </div>
      <div className={styles.fidelity}>
        <div className={styles.club}>
          <div>
            <div className={styles.cardClub}>
              <span>
                <span>LUJES</span> <span>club</span>
              </span>
            </div>
            <h2>LUJES club</h2>
          </div>
        </div>
        <div className={styles.programm}>
          <div>
            <h2>Programme de Fidélité</h2>
            <p>
              Plus de points cumulés pour plus
              <br />
              d&apos;avantages
            </p>
          </div>
          <button>Je découvre</button>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={truck} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Livraison Offerte</h3>
            <p>En Magasin</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={clock} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Click</h3>
            <p>&amp; Reserve</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={cart} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Click</h3>
            <p>&amp; Collect</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={smile} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Retour</h3>
            <p>&amp; Échanges</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={secure} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Paiement</h3>
            <p>Sécurisé</p>
          </div>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src={service} alt="" layout="fill" objectFit="contain" />
            </div>
            <h3>Serice</h3>
            <p>&amp; Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
