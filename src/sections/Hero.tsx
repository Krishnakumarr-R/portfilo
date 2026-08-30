"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { ArrowDownIcon, StarIcon } from "@/components/icons";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <StarIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <StarIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <StarIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        {/* Additional stars */}
        <HeroOrbit size={480} rotation={55} shouldOrbit orbitDuration="29s" shouldSpin spinDuration="4s">
          <StarIcon className="size-6 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={-30} shouldOrbit orbitDuration="35s" shouldSpin spinDuration="5s">
          <StarIcon className="size-16 text-emerald-300/80" />
        </HeroOrbit>
        <HeroOrbit size={760} rotation={210} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="7s">
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={670} rotation={40} shouldOrbit orbitDuration="41s" shouldSpin spinDuration="4s">
          <StarIcon className="size-10 text-emerald-300/70" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={120} shouldOrbit orbitDuration="56s" shouldSpin spinDuration="8s">
          <StarIcon className="size-24 text-emerald-300/60" />
        </HeroOrbit>
        <HeroOrbit size={380} rotation={150} shouldOrbit orbitDuration="26s" shouldSpin spinDuration="3s">
          <StarIcon className="size-7 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={-60} shouldOrbit orbitDuration="33s" shouldSpin spinDuration="5s">
          <StarIcon className="size-9 text-emerald-300/50" />
        </HeroOrbit>
        <HeroOrbit size={850} rotation={-110} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="6s">
          <StarIcon className="size-18 text-emerald-300/40" />
        </HeroOrbit>
        {/* Glowing dots / sparkles */}
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={350} rotation={30} shouldOrbit orbitDuration="22s">
          <div className="size-2 rounded-full bg-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={-80} shouldOrbit orbitDuration="28s">
          <div className="size-3 rounded-full bg-emerald-300/25" />
        </HeroOrbit>
        <HeroOrbit size={780} rotation={195} shouldOrbit orbitDuration="49s">
          <div className="size-2 rounded-full bg-emerald-300/15" />
        </HeroOrbit>
        <HeroOrbit size={580} rotation={260} shouldOrbit orbitDuration="37s">
          <div className="size-3 rounded-full bg-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit size={400} rotation={110} shouldOrbit orbitDuration="25s">
          <div className="size-2.5 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={-150} shouldOrbit orbitDuration="43s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={950} rotation={60} shouldOrbit orbitDuration="58s">
          <div className="size-3 rounded-full bg-emerald-300/10" />
        </HeroOrbit>
      </div>
      <div className="container">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={memojiImage}
            alt="Krishna Kumar"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 inline-flex items-center gap-2 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-md">Available for New Projects</div>
          </div>
        </motion.div>
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-serif text-3xl text-center mt-6 tracking-wide md:text-5xl">
            Hi, I&apos;m Krishna Kumar
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Full Stack Developer skilled in MERN stack, DevOps, and AI/ML
            applications. Let&apos;s build something great together.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="inline-flex gap-2 items-center border border-white/15 h-12 px-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDownIcon className="size-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 transition-colors duration-300">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
