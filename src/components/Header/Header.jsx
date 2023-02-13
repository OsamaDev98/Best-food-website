import React from "react";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
  AiOutlineMenu,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="container py-4 flex justify-between items-center gap-4 fixed left-0 top-0 right-0 z-[80] bg-white">
        <div className="flex items-center gap-2">
          <AiOutlineMenu
            // size={30}
            className="cursor-pointer text-xl md:text-2xl"
            onClick={() => setNav(true)}
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize">
            best <span className="font-bold">eats</span>
          </p>
        </div>
        <form className="flex items-center relative p-2 w-[40vw] md:w-[30vw] rounded-full bg-[#eee]">
          <AiOutlineSearch size={20} />
          <input
            type="search"
            placeholder="Search foods..."
            className="bg-transparent border-none outline-none w-full pl-4"
          />
        </form>
        <div className="hidden lg:flex items-center">
          <button className="bg-black text-white -mr-[20px] z-[2]">
            delivery
          </button>
          <button className="bg-[#eee] text-black pl-6 py-2">pickup</button>
        </div>
      </div>
      {/* Mobile Query */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[90] duration-300"
            : "hidden duration-300"
        }
        onClick={() => setNav(!nav)}
      ></div>
      {/* Nav Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 bg-white w-[250px] md:w-[300px] z-[100] min-h-screen p-4 duration-300"
            : "fixed left-[-200%] top-0 duration-300"
        }
      >
        <div className="flex items-center justify-between mb-8">
          <p className="text-2xl capitalize">
            best <span className="font-bold">eats</span>
          </p>
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={() => setNav(!nav)}
          />
        </div>
        <ul className="flex flex-col gap-8">
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <TbTruckDelivery /> <span>orders</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <MdFavorite /> <span>favorites</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <FaWallet /> <span>wallet</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <MdHelp /> <span>help</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <AiFillTag /> <span>promotions</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <BsFillSaveFill /> <span>best one</span>
          </li>
          <li className="flex  items-center gap-4 text-xl font-semibold capitalize cursor-pointer duration-300 hover:pl-6">
            <FaUserFriends /> <span>invite friends</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
