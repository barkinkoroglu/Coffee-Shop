import { MenuOutline, SearchOutline } from "react-ionicons";
import logo from "../assets/images/logo.svg";
import { navItems } from "../data";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-300 border-b border-gray-300 lg:px-[310px] px-5 flex items-center justify-between h-[40px]">
        <span className="text-gray-600 font-Source">
          Tired ? Let’s have a cup of coffee.
        </span>
        <span className="text-gray-600 font-Source">
          Call us: 123 456 789 241
        </span>
        <span className="text-gray-600 font-Source lg:block hidden">
          Our location: Izmir, Turkey
        </span>
      </div>
      <div className="w-full flex items-center justify-between h-[73px] lg:px-[310px] px-5">
        <img src={logo} alt="logo" className="h-10" />
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className={`font-Source text-lg transition-all ${
                item.active
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {item.title}
            </a>
          ))}
          <SearchOutline
            cssClasses={
              "cursor-pointer text-gray-600 hover:text-primary transition-all"
            }
          />
        </div>
        <div className="block lg:hidden">
          <MenuOutline
            cssClasses={
              "cursor-pointer text-gray-600 hover:text-primary transition-all"
            }
            width="35px"
            height="35px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
