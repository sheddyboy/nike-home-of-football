"use client";
import NavBtn from "@/components/NavBtn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-[55px] py-[62px] flex flex-col items-center"
    >
      <Image
        src="/HeroLogo.png"
        width={966}
        height={683}
        alt="MAD BRILLIANCE TRAIL"
      />
      <h1 className="h3 max-w-[970px] mt-[344px] mb-[293px] text-center">
        Lace up and play <br />
        in the latest <br />
        Nike Football Boots
      </h1>
      <div className="w-[640px] mb-[214px]">
        <NavBtn text="START" link="/language" active={true} />
      </div>
    </motion.main>
  );
}
