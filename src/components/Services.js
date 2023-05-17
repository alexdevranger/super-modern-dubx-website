import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 hover:shadow-xl my-[40px]">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-10/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services pt-[100px]">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start pl-[30px]">
        <h1
          className="text-3xl sm:text-5xl py-2 font-bold"
          style={{ fontWeight: "700!important" }}
        >
          Services that we
          <br />
          continue to improve
        </h1>
        <ul id="servicesUl" className="mt-4 mb-1">
          <li className="flex">
            <h3 className="text-white text-2xl my-1 font-bold borderGradient">
              FASTEST TRANSACTIONS
            </h3>
          </li>
          <li className="flex">
            <h3 className="text-white text-2xl my-1 font-bold borderGradient">
              SECURITY
            </h3>
          </li>
          <li className="flex">
            <h3 className="text-white text-2xl my-1 font-bold borderGradient">
              PRIVACY
            </h3>
          </li>
        </ul>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for individuals who may not have access to traditional
          banking services.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#8945F8]"
          title="Supply Chain Management"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="By tracking products from the source of raw materials to the end customer, businesses can ensure the authenticity and quality of their products, while also reducing costs and improving efficiency."
        />
        <ServiceCard
          color="bg-[#22efeb]"
          title="Identity Verification"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="With blockchain-based identity verification, individuals can control their own personal data and decide who has access to it."
        />
        <ServiceCard
          color="bg-[#dd39c1]"
          title="Payment and Remittance"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="By using cryptocurrencies or stablecoins, individuals can send and receive payments across borders without the need for intermediaries like banks. "
        />
      </div>
    </div>
  </div>
);

export default Services;
