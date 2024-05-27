"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import { FormCtx } from "@/context/form/FormProvider";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Success() {
  const { dispatch } = useContext(FormCtx);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <h1 className="text-center items-center gap-[27.5px] mb-[730px]">
        Enter
        <br />
        the cage to <br />
        start
        <br />
        the game
      </h1>
      <div className="w-[640px] mb-[166px]">
        <NavBtn
          text="RESTART"
          link="/"
          active={true}
          onClick={() => dispatch({ type: "reset" })}
        />
      </div>
      <Footer />
    </motion.main>
  );
}
