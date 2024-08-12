import {
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  LogoYoutube,
} from "react-ionicons";
import { companies } from "../data";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 items-center justify-between lg:px-[210px] px-5">
        {companies.map((item) => (
          <img src={item.image} alt={item.alt} key={item.alt} />
        ))}
      </div>
      <div className="w-full mt-[100px] flex lg:flex-row flex-col items-start justify-between gap-10 lg:px-[210px] px-5">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[100px]" />
          <span className="font-Source text-lg font-light text-secondary max-w-[310px] mt-3">
            Discover our commitment to quality and experience in every cup. We
            offer a cozy ambiance and exceptional service.
          </span>
          <div className="flex items-center gap-5 mt-5">
            <LogoFacebook
              cssClasses={"!text-icons !fill-icons cursor-pointer"}
            />
            <LogoInstagram
              cssClasses={"!text-icons !fill-icons cursor-pointer"}
            />
            <LogoTwitter
              cssClasses={"!text-icons !fill-icons cursor-pointer"}
            />
            <LogoLinkedin
              cssClasses={"!text-icons !fill-icons cursor-pointer"}
            />
            <LogoYoutube
              cssClasses={"!text-icons !fill-icons cursor-pointer"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="uppercase text-secondary font-Source text-lg tracking-wider"
          >
            Home
          </a>
          <a
            href="#"
            className="uppercase text-secondary font-Source text-lg tracking-wider"
          >
            About us
          </a>
          <a
            href="#"
            className="uppercase text-secondary font-Source text-lg tracking-wider"
          >
            Services
          </a>
          <a
            href="#"
            className="uppercase text-secondary font-Source text-lg tracking-wider"
          >
            Help & Support
          </a>
          <a
            href="#"
            className="uppercase text-secondary font-Source text-lg tracking-wider"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            address 1, location, 123
          </span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            address 1, location, 123
          </span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            address 1, location, 123
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            YOurinfo@mail.com
          </span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            address, location, 123
          </span>
          <span className="uppercase font-Source text-lg tracking-wider text-secondary">
            111 222 333 444 555
          </span>
        </div>
      </div>
      <div className="w-full h-[70px] mt-[100px] flex items-center justify-center border-t border-border">
        <span className="font-Source text-lg text-secondary font-light">
          © 2024 Kofee. Developed by Barkin Koroglu
        </span>
      </div>
    </div>
  );
};

export default Footer;
