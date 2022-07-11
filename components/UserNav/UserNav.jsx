import Link from "next/link";
import styles from "./UserNav.module.css";
import { RiShoppingBag3Line } from "react-icons/ri";
import fr from "../../public/assets/images/svg/fr.svg";
import Image from "next/image";

const UserNav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <div>
            <Link href="/">
              <a>Magasin</a>
            </Link>
            <Link href="/">
              <a>Compte</a>
            </Link>

            <div className={styles.flagContainer}>
              <div className={styles.flag}>
                <Image src={fr} alt="" layout="responsive" />
              </div>
              <Link href="/">
                <a>
                  <span>FR/fr</span>
                </a>
              </Link>
            </div>
          </div>
          <div>
            <Link href="/">
              <a>
                <span className={styles.cartContainer}>
                  <RiShoppingBag3Line className={styles.cart} />0
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
