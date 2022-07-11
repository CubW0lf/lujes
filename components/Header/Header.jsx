import ProductNav from "../ProductNav/ProductNav";
import SliderHighlight from "../SliderHighlight/SliderHighlight";
import UserNav from "../UserNav/UserNav";

const Header = () => {
  return (
    <>
      <UserNav />
      <ProductNav />
      <SliderHighlight />
    </>
  );
};

export default Header;
