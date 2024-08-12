import reservation from "../assets/images/reservation.png";
import Button from "./Button";

const Reservation = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center lg:h-[700px] my-[100px] px-5">
      <div className="w-full lg:w-1/2 h-full relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={reservation}
          alt="Reservation"
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-gray-100 flex items-center justify-center flex-col p-8 lg:p-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="uppercase text-[56px] md:text-[64px] lg:text-[72px] font-Bebas text-gray-900 tracking-wide mb-4">
            Reservation
          </span>
          <p className="font-Source text-lg font-light text-gray-700 mb-8 max-w-lg">
            Secure your spot at Kofee Cafe with ease. Our reservation system
            ensures a seamless experience, allowing you to choose the date and
            time that best suits you.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Number of People"
              className="border-b border-gray-300 bg-transparent outline-none font-Source text-lg font-light placeholder:text-gray-500 py-2"
            />
            <input
              type="date"
              placeholder="Date"
              className="border-b border-gray-300 bg-transparent outline-none font-Source text-lg font-light placeholder:text-gray-500 py-2"
            />
            <input
              type="time"
              placeholder="Time"
              className="border-b border-gray-300 bg-transparent outline-none font-Source text-lg font-light placeholder:text-gray-500 py-2"
            />
          </div>
          <Button className="mt-8 bg-primary text-white hover:bg-primary-dark transition-colors duration-300">
            Find a Table
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
