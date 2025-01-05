"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Header = () => {

  return (
    <header className="bg-green-100 text-green-700 py-4 shadow-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href={"/"}>
          <Image
            src="/nav-logo.png"
            alt="Pokémon Logo"
            width={150}
            height={50}
            className="mb-2"
          /></Link>


        {/* Explore Button */}
        <Link href="/pokemonPage" >
          <button className="bg-green-200 text-green-800 px-6 py-3 rounded-full shadow hover:bg-green-300 hover:text-green-900 transition duration-200 w-full md:w-auto">
            Explore Pokémon
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
