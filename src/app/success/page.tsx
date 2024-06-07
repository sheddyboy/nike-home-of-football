"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import { FormCtx } from "@/context/form/FormProvider";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Success() {
  const { state, dispatch } = useContext(FormCtx);
  const {
    language: { en },
  } = state;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <h1 className="mb-[730px] items-center gap-[27.5px] text-center">
        {en ? "Enter" : "Betritt die"}
        <br />
        {en ? "the cage to" : "Box und"} <br />
        {en ? "start" : "starte deinen"}
        <br />
        {en ? "the game" : "Trial"}
      </h1>
      <div className="mb-[166px] w-[640px]">
        <NavBtn
          text={en ? "RESTART" : "Neu starten"}
          link="/"
          active={true}
          onClick={() => {
            dispatch({ type: "reset" });
            fetch(
              `${process.env.NEXT_PUBLIC_ENDPOINT!}/api/restart`, 
              { method: "POST" }
            );
            }
          }
        />
      </div>
      <Footer />
    </motion.main>
  );
}
