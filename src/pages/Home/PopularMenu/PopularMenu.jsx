// PopularMenu.js

import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../../components/MenuItems";
import useMenu from "../../../hooks/useMenu";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import img1 from "../../../assets/four-cheese-pizza-wooden-board.jpg";
import img2 from "../../../assets/bb.jpg";
import img3 from "../../../assets/food.png";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "Our Menu");

  return (
    <section className="mb-12  ">
      <br />
      <br />
      <br />
      <SectionTitle
        heading="Form Our Menu"
        subHeading="Popular items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {/* Use ProductCard component for each product */}
        <ProductCard image={img1} title="Pizza" rating={5} price="$29" />
        <ProductCard image={img2} title="Burger" rating={4} price="$14" />
        <ProductCard image={img3} title="Beef" rating={3} price="$20" />
      </div>
    </section>
  );
};

export default PopularMenu;
