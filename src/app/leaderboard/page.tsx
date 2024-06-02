"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FormCtx } from "@/context/form/FormProvider";

export default function LeaderBoard() {
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
      <h1 className="h3 mb-[278px] gap-[27.5px] text-center uppercase">
        {en ? "COMPETE IN" : "Willst du"} <br />
        {en ? "THE LEADERBOARD?" : "aufs Leaderboard?"}
      </h1>
      <div className="mb-[335px] flex w-full flex-col gap-[27.5px] px-[55px]">
        <Option
          active={state.leaderBoard.amateur}
          onClick={() =>
            dispatch({
              type: "leaderBoard",
              payload: {
                amateur: true,
                pro: false,
                next: true,
                value: "Novice",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <span className="text-[58.5px]">AMATEUR</span>
            <span className="text-[41.5px]">
              {en
                ? "Opt out for Leaderboard"
                : "Ich möchte nicht aufs Leaderboard"}
            </span>
          </div>
        </Option>
        <Option
          active={state.leaderBoard.pro}
          onClick={() =>
            dispatch({
              type: "leaderBoard",
              payload: {
                amateur: false,
                pro: true,
                next: true,
                value: "Pro",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <span className="text-[58.5px]">PRO</span>
            <span className="text-[41.5px]">
              {en ? "Opt in for Leaderboard" : "Ich möchte aufs Leaderboard"}
            </span>
          </div>
        </Option>
      </div>
      <div className="mb-[166px] flex w-full justify-between px-[55px]">
        <span className="w-[310px]">
          <NavBtn
            text={en ? "PREVIOUS" : "ZURÜCK"}
            link="/language"
            active={true}
          />
        </span>
        <span className="w-[310px]">
          <NavBtn
            text={en ? "NEXT" : "WEITER"}
            link="/game"
            active={state.leaderBoard.next}
          />
        </span>
      </div>
      <Footer />
    </motion.main>
  );
}
