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
      <div className="h3 flex flex-col items-center gap-[27.5px] mb-[278px]">
        <span>Choose your Language</span>
        <span className="h-[2px] bg-black w-full max-w-[640px]"></span>
        <span>WÄHLE DEINE SPRACHE</span>
      </div>
      <div className="px-[55px] w-full flex flex-col mb-[335px] gap-[27.5px]">
        <Option
          active={state.language.en}
          onClick={() =>
            dispatch({
              type: "language",
              payload: { en: true, de: false, next: true, value: "English" },
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
              payload: { en: false, de: true, next: true, value: "Deutsch" },
            })
          }
        >
          Deutsch
        </Option>
      </div>
      <div className="w-[640px] mb-[166px]">
        <NavBtn text="NEXT" link="/leaderboard" active={state.language.next} />
      </div>
      <Footer />
    </motion.main>
  );
}
