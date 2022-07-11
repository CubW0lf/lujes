import styles from "./AsideFilter.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaSquareFull } from "react-icons/fa";
import { GiSquare } from "react-icons/gi";
import { useState } from "react";

const AsideFilter = ({ categories, sizes, colors }) => {
  const [toggleCategories, setToggleCategories] = useState(false);
  const [toggleSizes, setToggleSizes] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);
  return (
    <aside className={styles.container}>
      <button className={styles.reset}>Reinitialiser</button>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <h2 onClick={() => setToggleCategories(!toggleCategories)}>
            Par Catégorie <HiOutlineChevronDown className={toggleCategories ? styles.rotate : styles.chevron} />
          </h2>
          <ul className={toggleCategories ? styles.liste : styles.minimize}>
            {categories &&
              categories.map((c) => (
                <li key={c.id}>
                  <span>
                    <span>{c.title}</span> <span className={styles.qty}>({c.qty})</span>
                  </span>
                  <GiSquare />
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.filter}>
          <h2 onClick={() => setToggleSizes(!toggleSizes)}>
            Par Taille <HiOutlineChevronDown className={toggleSizes ? styles.rotate : styles.chevron} />
          </h2>
          <div className={`${styles.sizes} ${toggleSizes ? "" : styles.minimize}`}>
            {sizes && sizes.map((s) => <span key={s.id}>{s.size}</span>)}
          </div>
        </div>
        <div className={styles.filter}>
          <h2 onClick={() => setToggleColor(!toggleColor)}>
            Par Couleur <HiOutlineChevronDown className={toggleColor ? styles.rotate : styles.chevron} />
          </h2>
          <div className={`${styles.colors} ${toggleColor ? "" : styles.minimize}`}>
            {colors && colors.map((c) => <FaSquareFull key={c.id} style={{ color: c.color }} />)}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideFilter;
