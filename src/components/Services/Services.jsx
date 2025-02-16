import React from "react";
import {
  FaCarSide,
  FaHeadphones,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServicesDate = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Save Money",
    description: "30 Days Money Back",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 3,
    icon: <FaWallet className="md:text-5xl text-4xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div>
      <div className="my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServicesDate.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row gap-4"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              <div data-aos="flip-left" data-aos-duration="1500">
                {data.icon}
              </div>
              <div>
                <h1
                  className="lg:text-xl font-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {data.title}
                </h1>
                <p
                  className="text-gray-400 text-sm"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
