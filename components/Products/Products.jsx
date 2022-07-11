import Item from "../Item/Item";
import styles from "./Products.module.css";

const Products = ({ items }) => {
  return <div className={styles.container}>{items && items.map((i) => <Item item={i} key={i.id} />)}</div>;
};

export default Products;
