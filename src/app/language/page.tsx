"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import { FormCtx } from "@/context/form/FormProvider";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Language() {
  const { state, dispatch } = useContext(FormCtx);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <div className="h3 mb-[278px] flex flex-col items-center gap-[27.5px]">
        <span>Choose your Language</span>
        <span className="h-[2px] w-full max-w-[640px] bg-black"></span>
        <span>WÄHLE DEINE SPRACHE</span>
      </div>
      <div className="mb-[335px] flex w-full flex-col gap-[27.5px] px-[55px]">
        <Option
          active={state.language.en}
          onClick={() =>
            dispatch({
              type: "language",
              payload: { en: true, de: false, next: true, value: "EN" },
            })
          }
        >
          English
        </Option>
        <Option
          active={state.language.de}
          onClick={() =>
            dispatch({
              type: "language",
              payload: { en: false, de: true, next: true, value: "DE" },
            })
          }
        >
          Deutsch
        </Option>
      </div>
      <div className="mb-[166px] w-[640px]">
        <NavBtn text="NEXT" link="/leaderboard" active={state.language.next} />
      </div>
      <Footer />
    </motion.main>
  );
}
