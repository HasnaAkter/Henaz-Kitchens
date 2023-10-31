import { useEffect } from "react";

import HeadingImage from "../../../../assets/henna.jpg";
import "./style.css";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        '[data-te-animation-on-scroll="repeat"]'
      );

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (
          elementTop < windowHeight * 0.75 &&
          !element.classList.contains("animate-fade-in")
        ) {
          element.classList.add("animate-fade-in");
        } else if (
          elementTop >= windowHeight * 0.75 &&
          element.classList.contains("animate-fade-in")
        ) {
          if (
            element.getAttribute("data-te-animation-on-scroll") === "repeat"
          ) {
            element.classList.remove("animate-fade-in");
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={HeadingImage}
          className="max-w-sm rounded-lg shadow-2xl "
          alt="Heading Image"
        />
        <div className="text-container">
          <h1
            className="text-5xl font-bold animate-on-scroll"
            data-te-animation-on-scroll="repeat"
          >
            Welcome to Henaz Kitchen!
          </h1>
          <p
            className="py-6 animate-on-scroll"
            data-te-animation-on-scroll="repeat"
          >
            At Henaz Kitchen, we pride ourselves on offering a delightful fusion
            of culinary traditions, bringing together the rich and diverse
            flavors of Bangladeshi, Chinese, and Indian cuisines. Our menu
            features a tantalizing array of dishes that represent the vibrant
            tapestry of flavors from these distinct culinary heritages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
