import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="featured-item bg-fixed text-white   ">
        <SectionTitle
          subHeading="check it out"
          heading="Food Fusion"
        ></SectionTitle>
        <div className="md: flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
          <div>
            <img
              src={featured}
              alt=""
              className="animate-pulse
"
            />
          </div>
          <div className="md: ml-10">
            <p>HENAZ FUSION,</p>

            <p className="uppercase">
              {" "}
              Chefs started combining elements from different Asian cuisines or
              mixing Asian flavors with Western ingredients. Sushi burritos,
              anyone?
            </p>
            <p>
              The beauty of food fusion is that it allows for creativity and
              innovation in the kitchen. Its not just about following
              traditional recipes; its about breaking the rules and coming up
              with something entirely new and exciting. Whether its Korean
              tacos, sushi pizza, or Indian-inspired tacos, the possibilities
              are endless!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 transition duration-300 ease-in-out ">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
