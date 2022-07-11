import Image from "next/image";
import styles from "./Categories.module.css";
// import shirt from "../../public/assets/images/shirt.png";
import getAssetURL from "../../directus/getAssets";

const Categories = ({ circles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {circles &&
          circles.map((c) => (
            <div className={styles.category} key={c.id}>
              <div className={styles.imgContainer}>
                <Image src={getAssetURL(c.fimg.id)} alt="" layout="fill" objectFit="contain" />
              </div>
              <span>{c.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
