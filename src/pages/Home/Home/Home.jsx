import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";
import { Helmet } from "react-helmet";
import About from "./About/About";
import Faq from "../FAQ/Faq";
import Form from "./Form/Form";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>henaz | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <PopularMenu></PopularMenu>
      <Category></Category>
      {/* 
      <Boxmodel></Boxmodel> */}
      <Featured></Featured>
      <Faq></Faq>
      <Form></Form>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
