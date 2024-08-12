import { MenuOutline, SearchOutline } from "react-ionicons";
import logo from "../assets/images/logo.svg";
import { navItems } from "../data";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-gray-900 text-white py-2 flex items-center justify-center lg:justify-between lg:px-32 px-4">
        <div className="flex items-center gap-8 text-sm lg:text-base font-Source">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M12 6v.01M12 14v.01m0 4h.01M16 6h.01M16 14h.01M16 18h.01M8 14H8.01M8 18h.01M8 6h.01"
              />
            </svg>
            Tired? Let’s have a cup of coffee.
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h6v10H3zM15 10h6v10h-6zM9 3h6v4H9z"
              />
            </svg>
            Call us: 123 456 789 241
          </span>
        </div>
        <span className="hidden lg:flex items-center gap-2 text-sm lg:text-base font-Source">
          <svg
            className="w-4 h-4 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3l14 18M5 21l14-18"
            />
          </svg>
          Our location: Izmir, Turkey
        </span>
      </div>

      {/* Navbar */}
      <div className="w-full flex items-center justify-between h-[73px] lg:px-32 px-5 bg-white border-b border-gray-300">
        <img src={logo} alt="logo" className="h-12" />
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className={`font-Source text-lg transition-colors ${
                item.active
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.title}
            </a>
          ))}
          <SearchOutline cssClasses="cursor-pointer text-gray-600 hover:text-primary transition-colors" />
        </div>
        <div className="lg:hidden flex items-center">
          <MenuOutline
            cssClasses="cursor-pointer text-gray-600 hover:text-primary transition-colors"
            width="35px"
            height="35px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
