"use client"
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center jestify-center sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div>
            <Image className="rounded-full shadow-2xl" src="/profile_pic.jpg" alt="" width={300} height={300}/>
        </div>
        <div>
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Barry McGuirk</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">Full-stack Web Developer, Pre-Sales Solutions Engineer, SaaS Sales Professional</p>       
            <div>            
              <a
            href="#projects"
            className="hover:cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            // activeClass="active"
            // spy={true}
            // smooth={true}
            // offset={-100}
            // duration={500}
                > 
              Projects  
              </a>
            </div>
        </div>
      </div>
      <div className="flex flex-row justify-center py-20">
          <a
              href="#about"
              //activeClass="activate"
              //spy={true}
              //smooth={true}
              //offset={-100}
              //duration={500}
          >
              <HiArrowDown size={35} className="animate-bounce" />
          </a>
      </div>
    </section>
  )
}

export default HeroSection