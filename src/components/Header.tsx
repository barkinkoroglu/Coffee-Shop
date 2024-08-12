import bg from "../assets/images/bg.png";
import Button from "./Button";

const Header = () => {
  return (
    <div
      className="w-full h-[670px] relative bg-cover bg-center px-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center text-center py-6 lg:py-0 lg:h-full px-5">
        <h1 className="text-white font-Bebas text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] tracking-wide uppercase leading-none">
          Enjoy Your Coffee
        </h1>
        <p className="text-white font-Source text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] mt-4 max-w-[90%] md:max-w-[80%] lg:max-w-[600px] leading-7 sm:leading-8">
          Experience the best coffee in town. Freshly brewed with love and
          served with a smile.
        </p>
        <Button className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base lg:text-lg">
          Explore Menu
        </Button>
      </div>

      <div className="absolute bottom-[-140px] left-1/2 transform -translate-x-1/2 w-full bg-white shadow-lg border border-gray-300 rounded-[20px] lg:h-[280px] lg:max-w-[67.5vw] flex items-center lg:justify-between justify-center lg:flex-row flex-col lg:px-14 p-7 gap-6 sm:gap-10">
        <div className="flex flex-col gap-2 text-center">
          <span className="uppercase font-Bebas text-[36px] sm:text-[40px] md:text-[44px] text-gray-800 tracking-wide">
            Have a cup of coffee
          </span>
          <p className="text-gray-600 font-Source text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-light max-w-[90%] md:max-w-[600px] leading-6 sm:leading-7 lg:leading-8 mx-auto">
            Morbi justo vel diam non leo elementum massa. Molestie ipsum
            condimentum egestas vitae ut cras aenean aoreet odionis.
          </p>
          <div className="flex justify-center mt-3">
            <Button>Book a Table</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:border-l border-gray-300 lg:pl-10 text-center lg:text-left">
          <span className="uppercase font-Bebas text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-gray-800 tracking-wide">
            It's Koffee Time!
          </span>
          <div className="flex flex-col gap-2 ">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-Source text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light">
                Mon - Fri
              </span>
              <span className="hidden sm:block text-gray-600 font-Source font-light text-[20px]">
                ...........................
              </span>
              <span className="font-Source text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light">
                6.00 am - 7.00 pm
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="font-Source text-[16px]  md:text-[18px] lg:text-[20px] text-gray-600 font-light">
                Sat - Sun
              </span>
              <span className="hidden sm:block text-gray-600 font-Source font-light text-[20px]">
                ...........................
              </span>
              <span className="font-Source text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 font-light">
                7.00 am - 8.00 pm
              </span>
            </div>
            <Button className="mt-3 opacity-0 pointer-events-none">
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
