"use client"
import { useState } from "react";
import Link from "next/link";
import logo from "../public/Frame.png";
import frame from "../public/Frame (1).png";
import Image from "next/image";
import Navicon from "./navicon";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="w-full h-9 bg-[#F5F5F5] text-[#111111] flex items-center justify-between px-4 md:px-16">
        <Image src={logo} alt="logo" className="h-6 w-auto" />
        <div>
          <ul className="flex gap-2 text-xs md:text-sm md:gap-3">
          <Link href="/allproduct"> 
          <li >Find a store</li>
          </Link>  
            <li>|</li>
            <li>Help</li>
            <li>|</li>
            <Link href="/joinuspage">   <li>Join Us</li> </Link>
            <li>|</li>
            <Link href="/loginpage">  <li>Sign In</li>
            </Link> 
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center h-16 bg-white px-4 md:px-16 relative">
        <div className="flex items-center justify-between w-full">
          {/* Left Section */}
          <div className="flex items-center space-x-4 md:space-x-40">
            <Image src={frame} alt="logo1" className="h-8 w-auto" />
            <ul className="hidden md:flex text-black space-x-2 md:space-x-16 text-xs md:text-base">
              <link href="cartpage">
              <li className="whitespace-nowrap">New & Featured</li>
              </link>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>SNKRS</li>
            </ul>
          </div>

          {/* Right Section */}
          <Navicon />

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center text-black text-sm space-y-4 py-4">
              <li className="whitespace-nowrap">New & Featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>SNKRS</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


