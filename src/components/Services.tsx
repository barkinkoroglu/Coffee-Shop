import { services } from "../data";

const Services = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col  gap-8 items-center justify-between md:px-[50px] px-5 md:mt-[20px]">
      {services.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="flex-shrink-0 mb-3"
          />
          <span className="fount-Source text-secondary text-[28px] text-center mt-3">
            {item.title}
          </span>
          <p className="text-center font-Source text-secondary font-light max-w-[310px] mt-1">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
