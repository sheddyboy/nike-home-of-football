"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Terms from "@/components/Terms";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FormCtx } from "@/context/form/FormProvider";

export default function Register() {
  const { state, dispatch } = useContext(FormCtx);

  const [inputs, setInputs] = useState({
    email: "Enter your E-mail...",
    nickName: "Enter A NICKNAME...",
  });
  const [height, setHeight] = useState("100%");
  const [nextBtn, setNextBtn] = useState(false);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <h1 className="h3 mb-[227px]">REGISTER</h1>
      <form className="mb-[750px] flex w-full flex-col justify-stretch gap-[7.5px] px-[55px]">
        <div className="flex flex-col gap-[27.5px]">
          <Input
            name="Email"
            placeholder={`${inputs.email}`}
            type="email"
            value={state.formInputs.email}
            required={true}
            onChange={(e) =>
              dispatch({
                type: "formInputs",
                payload: { email: e.target.value },
              })
            }
            onFocus={() => setInputs((prev) => ({ ...prev, email: "" }))}
            onBlur={(e) => {
              setNextBtn(e.target.form?.checkValidity() ?? false);
              e.target.value.trim() === "" &&
                setInputs((prev) => ({
                  ...prev,
                  email: "Enter your E-mail...",
                }));
              !e.target.checkValidity() && e.target.reportValidity();
            }}
          />
          <Input
            name="NickName"
            value={state.formInputs.nickName}
            maxLength={10}
            placeholder={`${inputs.nickName}`}
            required={true}
            onChange={(e) => {
              dispatch({
                type: "formInputs",
                payload: { nickName: e.target.value },
              });
              setNextBtn(e.target.form?.checkValidity() ?? false);
            }}
            onFocus={() => setInputs((prev) => ({ ...prev, nickName: "" }))}
            onBlur={(e) => {
              e.target.value.trim() === "" &&
                setInputs((prev) => ({
                  ...prev,
                  nickName: "Enter A NICKNAME...",
                }));
            }}
          />
          <Input
            name="Language"
            type="hidden"
            value={state.formInputs.language}
            onChange={(e) =>
              dispatch({
                type: "formInputs",
                payload: { language: e.target.value },
              })
            }
          />
          <Input
            name="LeaderBoard"
            type="hidden"
            value={state.formInputs.leaderBoard}
            onChange={(e) =>
              dispatch({
                type: "formInputs",
                payload: { leaderBoard: e.target.value },
              })
            }
          />
          <Input
            name="Game"
            type="hidden"
            value={state.formInputs.game}
            onChange={(e) =>
              dispatch({
                type: "formInputs",
                payload: { game: e.target.value },
              })
            }
          />
        </div>
        <span className="text-sm-mix mx-auto">Max. 10 Characters</span>
      </form>
      <div className="mb-[166px] flex w-full justify-between px-[55px]">
        <span className="w-[310px]">
          <NavBtn text="PREVIOUS" link="/game" active={true} />
        </span>
        <span className="w-[310px]">
          <NavBtn
            text="NEXT"
            link="#"
            active={nextBtn}
            onClick={() => setHeight("0%")}
          />
        </span>
      </div>
      <Terms height={height} closeClickEvent={() => setHeight("100%")} />
      <Footer />
    </motion.main>
  );
}
