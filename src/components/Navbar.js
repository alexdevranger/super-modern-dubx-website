import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Send from "../pages/Send";

import logo from "../images/logoAr.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-64 cursor-pointer" />
      </div>
      <div className="md:flex-[0.5] flex flex-initial justify-end items-center">
        <ul className="text-white md:flex hidden list-none flex-row  items-center flex-initial">
          {/* {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
          <li className="mx-4 cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className="mx-4 cursor-pointer">
            <Link to="/send">EASY-SEND</Link>
          </li>
          {/* <li className="mx-4 cursor-pointer">
            <Link to="/send">EASY-BUY</Link>
          </li> */}
          <li className="bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#14235C]">
            Login
          </li>
        </ul>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
