import Image from "next/image";
import styles from "./ProductNav.module.css";
import logo from "../../public/assets/images/svg/lujes.png";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const ProductNav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src={logo} alt="" layout="responsive" />
        </div>
        <div className={styles.products}>
          <Link href="/">
            <a>Soldes</a>
          </Link>
          <Link href="/">
            <a>Nouveautés</a>
          </Link>
          <Link href="/">
            <a>Haut</a>
          </Link>
          <Link href="/">
            <a>Bas</a>
          </Link>
          <Link href="/">
            <a>Costumes</a>
          </Link>
          <Link href="/">
            <a>Accessoires</a>
          </Link>
          <Link href="/">
            <a>In Progress</a>
          </Link>
          <Link href="/">
            <a>Actus</a>
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <input type="search" placeholder="RECHERCHER" />
          <BsSearch />
        </div>
      </div>
    </nav>
  );
};

export default ProductNav;
