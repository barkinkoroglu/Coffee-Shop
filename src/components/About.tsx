import aboutImage from "../assets/images/aboutImage.png";
import Button from "./Button";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-5 lg:px-32 py-16 lg:py-24 mt-[100px] md:mt-[200px]">
      <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/2">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 lg:pl-12 text-center lg:text-left">
        <h2 className="uppercase text-text font-Bebas text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] tracking-wide mb-4">
          About Us
        </h2>
        <p className="text-lg font-Source font-light text-secondary lg:text-left text-justify mb-6 lg:mb-10 lg:max-w-[650px] mx-auto lg:mx-0">
          Welcome to Kofee Cafe, where each cup is a journey into the art of
          coffee. We take pride in crafting a truly memorable coffee experience
          within a warm and inviting setting. Our passionate baristas
          meticulously prepare every cup, ensuring a harmonious blend of flavors
          and aromas. Whether you're a seasoned coffee enthusiast or simply
          enjoy a great cup of joe, you'll find something to delight your taste
          buds in our curated selection, from classic cappuccinos to expertly
          crafted lattes.
        </p>
        <Button className="mx-auto lg:mx-0 bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default About;
