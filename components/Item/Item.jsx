import Image from "next/image";
import styles from "./Item.module.css";
import getAssetURL from "../../directus/getAssets";

const Item = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={getAssetURL(item.fimg.id)} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.colorChoice}>
        <div className={styles.color}></div>
      </div>
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>{`${item.price / 100} €`}</p>
    </div>
  );
};

export default Item;
