import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Send from "../pages/Send";

import logo from "../images/logoAr.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex justify-end items-center p-8 relative">
      <div className="absolute left-0">
        <NavLink to="/" activeclassname="active-link">
          <img src={logo} alt="logo" className="w-48 lg:w-64 cursor-pointer" />
        </NavLink>
      </div>
      <div className="flex justify-end items-center">
        <ul className="text-white md:flex hidden list-none flex-row items-center navUl">
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/">home</Link> */}
            <NavLink to="/" activeclassname="active-link">
              home
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/about-us">about us</Link> */}
            <NavLink to="/about-us" activeclassname="active-link">
              about us
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/roadmap">roadmap</Link> */}
            <NavLink to="/roadmap" activeclassname="active-link">
              roadmap
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/send">easy-send</Link> */}
            <NavLink to="/send" activeclassname="active-link">
              easy-send
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/easy-buy">easy-buy</Link> */}
            <NavLink to="/easy-buy" activeclassname="active-link">
              easy-buy
            </NavLink>
          </li>
          <li className="mx-1 lg:mx-2 cursor-pointer text-[14px] lg:text-[20px]">
            {/* <Link to="/easy-buy">easy-buy</Link> */}
            <NavLink to="/contact" activeclassname="active-link">
              contact
            </NavLink>
          </li>
          {/* <li className="bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#14235C] text-[20px]">
            Login
          </li> */}
        </ul>
      </div>
      <div className="flex relative">
        {!toggleMenu && (
          <HiOutlineMenu
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
            {/* {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )} */}
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/">HOME</Link>
            </li>
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/about-us">ABOUT US</Link>
            </li>
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/roadmap">ROADMAP</Link>
            </li>
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/send">EASY-SEND</Link>
            </li>
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/easy-buy">EASY-BUY</Link>
            </li>
            <li className="mx-4 my-8 cursor-pointer">
              <Link to="/contact">CONTACT</Link>
            </li>
            {/* <li className="mx-4 my-8 bg-[#1BF8EC] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1BF8EC] text-[#4a2084] font-bold">
              Login
            </li> */}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
