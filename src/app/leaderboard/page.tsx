"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FormCtx } from "@/context/form/FormProvider";

export default function LeaderBoard() {
  const [toggle, setToggle] = useState({ en: true, de: true, next: false });
  const { state, dispatch } = useContext(FormCtx);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <h1 className="h3 text-center gap-[27.5px] mb-[278px]">
        WOULD YOU LIKE TO <br />
        COMPETE ON <br />
        THE LEADERBOARD?
      </h1>
      <div className="px-[55px] w-full flex flex-col mb-[335px] gap-[27.5px]">
        <Option
          active={state.leaderBoard.amateur}
          onClick={() =>
            dispatch({
              type: "leaderBoard",
              payload: {
                amateur: true,
                pro: false,
                next: true,
                value: "AMATEUR",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <span className="text-[58.5px]">AMATEUR</span>
            <span className="text-[41.5px]">Opt out for Leaderboard</span>
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
                value: "PRO",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <span className="text-[58.5px]">PRO</span>
            <span className="text-[41.5px]">Opt in for Leaderboard</span>
          </div>
        </Option>
      </div>
      <div className="mb-[166px] flex justify-between w-full px-[55px]">
        <span className="w-[310px]">
          <NavBtn text="PREVIOUS" link="/language" active={true} />
        </span>
        <span className="w-[310px]">
          <NavBtn text="NEXT" link="/game" active={state.leaderBoard.next} />
        </span>
      </div>
      <Footer />
    </motion.main>
  );
}
