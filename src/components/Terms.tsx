"use client";
import { FormCtx } from "@/context/form/FormProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import TermsEnText from "./TermsEnText";
import TermsDeText from "./TermsDeText";
interface TermsProps {
  height: string;
  closeClickEvent: () => void;
}

export default function Terms({ height, closeClickEvent }: TermsProps) {
  const { state } = useContext(FormCtx);
  const {
    language: { en },
  } = state;
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: height }}
      className="fixed bottom-0 left-0 flex w-full flex-col gap-[15px]"
    >
      <svg
        className="mx-auto cursor-pointer"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          closeClickEvent();
        }}
      >
        <circle cx="45" cy="45" r="44" stroke="black" strokeWidth="2" />
        <path
          d="M35 34L55 56"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M55 34L35 56"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
      <div className="relative h-[75vh] overflow-auto bg-white">
        {en ? <TermsEnText /> : <TermsDeText />}
        <button
          type="submit"
          className="text-big-caps sticky bottom-0 flex w-full justify-center rounded-t-[10px] bg-white py-[55px] shadow-custom-shadow"
        >
          {en ? "Accept" : "Akzeptieren"}
        </button>
      </div>
    </motion.div>
  );
}
