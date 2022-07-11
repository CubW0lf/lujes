import AsideFilter from "../AsideFilter/AsideFilter";
import Products from "../Products/Products";
import styles from "./Main.module.css";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { ImEqualizer2 } from "react-icons/im";
import { BsFillGrid3X3GapFill, BsGrid3X3Gap } from "react-icons/bs";

const Main = ({ categories, sizes, colors, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.filterConfig}>
        <div className={styles.hide}>
          <ImEqualizer2 />
          <span>Masquer les filtres</span>
        </div>
        <div className={styles.sort}>
          <span>Trier</span>
          <FaSortAmountDownAlt />
          <BsFillGrid3X3GapFill />
          <BsGrid3X3Gap />
        </div>
      </div>
      <div className={styles.wrapper}>
        <AsideFilter categories={categories} sizes={sizes} colors={colors} />
        <Products items={items} />
      </div>
    </div>
  );
};

export default Main;
