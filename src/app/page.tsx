"use client";
import NavBtn from "@/components/NavBtn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center px-[55px] py-[62px]"
    >
      <Image
        src="/HeroLogo.png"
        width={966}
        height={683}
        alt="MAD BRILLIANCE TRAIL"
      />
      <h1 className="h3 mb-[293px] mt-[344px] max-w-[970px] text-center">
        Lace up and play <br />
        in the latest <br />
        Nike Football Boots
      </h1>
      <div className="mb-[214px] w-[640px]">
        <NavBtn text="START" link="/language" active={true} />
      </div>
    </motion.main>
  );
}
