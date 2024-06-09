"use client";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Terms from "@/components/Terms";
import { Input } from "@/components/ui/input";
import {
  ChangeEvent,
  useContext,
  useRef,
  useState,
  FocusEvent,
  FormEvent,
} from "react";
import { motion } from "framer-motion";
import { FormCtx } from "@/context/form/FormProvider";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const { state, dispatch } = useContext(FormCtx);
  const {
    language: { en },
  } = state;

  const [inputs, setInputs] = useState({
    email: en ? "Enter your E-mail..." : "Gib deine E-Mail-Adresse ein...",
    nickName: en ? "Enter A NICKNAME..." : "Gib deinen Nickname ein...",
    shoeSize: en ? "INSERT YOUR SHOE SIZE..." : "GIB DEINE SCHUHGRÖSSE EIN...",
  });
  const [height, setHeight] = useState("100%");
  const [nextBtn, setNextBtn] = useState(false);
  const [layoutName, setLayoutName] = useState("default");
  const [inputTrack, setInputTrack] = useState<{
    name: string;
    event: FocusEvent<HTMLInputElement, Element> | null;
  }>({ name: "email", event: null });
  const [keyboardAnimation, setKeyboardAnimation] = useState("100%");
  const [shoeSizeTextToggle, setShoeSizeTextToggle] = useState(false);
  const keyboard = useRef<KeyboardReactInterface | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: "formInputs",
      payload: { [name]: value },
    });
  };

  const handleKeyboardChange = (input: string) => {
    dispatch({
      type: "formInputs",
      payload: {
        [inputTrack.name]:
          inputTrack.name === "shoeSize"
            ? input.replace(/[^0-9]/g, "").slice(0, 2)
            : input,
      },
    });
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    event.target.select();
    setInputTrack({ name: event.target.name, event });
    const inputName =
      state.formInputs[event.target.name as "email" | "nickName" | "shoeSize"];
    keyboard.current?.setInput(inputName);
  };
  const keyboardOnKeyPress = (button: string) => {
    (button === "{shift}" || button === "{lock}") &&
      setLayoutName(layoutName === "shift" ? "default" : "shift");
    button === "{enter}" && inputTrack.event?.target.blur();
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const data = {
      Language: state.formInputs.language,
      Playername: state.formInputs.nickName,
      Playerlevel: state.formInputs.leaderBoard,
      Game: state.formInputs.game,
      Shoesize: +state.formInputs.shoeSize,
      Email: state.formInputs.email,
    };
    console.log("data", data);
    fetch(`${process.env.NEXT_PUBLIC_ENDPOINT!}/api/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        router.push("/success");
      })
      .catch((err) => {
        router.push("/success");
      });
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center pt-[260px]"
    >
      <h1 className="h3 mb-[227px]">{en ? "REGISTER" : "REGISTRIERUNG"}</h1>
      <form
        autoComplete="off"
        className="mb-[590px] flex w-full flex-col justify-stretch gap-[7.5px] px-[55px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-[27.5px]">
          <Input
            name="email"
            placeholder={`${inputs.email}`}
            type="email"
            value={state.formInputs.email}
            onChange={handleChange}
            onFocus={(e) => {
              setInputs((prev) => ({ ...prev, email: "" }));
              handleFocus(e);
              setKeyboardAnimation("0%");
            }}
            onBlur={(e) => {
              setNextBtn(e.target.form?.checkValidity() ?? false);
              e.target.value.trim() === "" &&
                setInputs((prev) => ({
                  ...prev,
                  email: en
                    ? "Enter your E-mail..."
                    : "Gib deine E-Mail-Adresse ein...",
                }));
              !e.target.checkValidity() && e.target.reportValidity();
              e.target.checkValidity() && setKeyboardAnimation("100%");
            }}
          />
          <div className="flex flex-col gap-[8px]">
            <Input
              name="nickName"
              value={state.formInputs.nickName}
              maxLength={10}
              placeholder={`${inputs.nickName}`}
              required={true}
              onChange={(e) => {
                handleChange(e);
                setNextBtn(e.target.form?.checkValidity() ?? false);
              }}
              onFocus={(e) => {
                setInputs((prev) => ({ ...prev, nickName: "" }));
                handleFocus(e);
                setKeyboardAnimation("0%");
              }}
              onBlur={(e) => {
                e.target.value.trim() === "" &&
                  setInputs((prev) => ({
                    ...prev,
                    nickName: en
                      ? "Enter A NICKNAME..."
                      : "Gib deinen Nickname ein...",
                  }));
                setKeyboardAnimation("100%");
                setNextBtn(e.target.form?.checkValidity() ?? false);
              }}
            />
            <span className="text-sm-mix mx-auto">
              Max. 10 {en ? "Characters" : "Zeichen"}
            </span>
          </div>

          <div className=" flex flex-col  gap-[8px]">
            <div className="relative flex items-center">
              <Input
                name="shoeSize"
                value={state.formInputs.shoeSize}
                maxLength={2}
                placeholder={`${inputs.shoeSize}`}
                required={true}
                onChange={(e) => {
                  handleChange(e);
                  setNextBtn(e.target.form?.checkValidity() ?? false);
                }}
                onFocus={(e) => {
                  setInputs((prev) => ({ ...prev, shoeSize: "" }));
                  handleFocus(e);
                  setKeyboardAnimation("0%");
                  setShoeSizeTextToggle(true);
                }}
                onBlur={(e) => {
                  e.target.value.trim() === "" &&
                    setInputs((prev) => ({
                      ...prev,
                      shoeSize: en
                        ? "INSERT YOUR SHOE SIZE..."
                        : "GIB DEINE SCHUHGRÖSSE EIN...",
                    }));
                  setKeyboardAnimation("100%");
                  setNextBtn(e.target.form?.checkValidity() ?? false);
                  setShoeSizeTextToggle(
                    e.target.value.trim() === "" ? false : true,
                  );
                }}
              />
              {shoeSizeTextToggle && (
                <span className="text-big-caps absolute left-[26px] leading-[95%]">
                  EU
                </span>
              )}
            </div>
            <span className="text-sm-mix mx-auto">
              Max. 2 {en ? "Characters" : "Zeichen"}
            </span>
          </div>
        </div>
        <Terms height={height} closeClickEvent={() => setHeight("100%")} />
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
      <Footer />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: keyboardAnimation }}
        className="fixed bottom-0 z-[2] w-full"
      >
        <Keyboard
          preventMouseDownDefault={true}
          mergeDisplay={true}
          display={{
            "{enter}": `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_42_549)">
                            <path d="M1.99652 21.8139H30.8787V0.625H14.5659" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                            <path d="M11.0215 31.5561L1.37732 21.8147L11.0215 12.0732" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_42_549">
                              <rect width="31" height="32" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        `,
            "{space}": `<svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_42_542)">
                            <path d="M1.20367 0.844727V14.0078H58.7922V0.844727" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_42_542">
                              <rect width="59.8864" height="14.31" fill="white" transform="translate(0.0567627 0.844727)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        `,
            "{bksp}": `<svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.0837 22.8112C35.0837 23.3635 34.636 23.8112 34.0837 23.8112H11.1337C10.8305 23.8112 10.5437 23.6737 10.3539 23.4372L2.0024 13.0326C1.70889 12.6669 1.70886 12.1464 2.00234 11.7807L10.3539 1.3741C10.5437 1.1376 10.8306 1 11.1338 1H34.0837C34.636 1 35.0837 1.44772 35.0837 2V22.8112Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M15.5 6L27.5 19" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M27.5 6L15.5 19" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
                      </svg>
                      `,
            "{lock}": `<svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7552 18.9613V17.9613H9.75519L1.37728 17.9613L17.5501 1.43003L33.7202 17.9613H25.342H24.342V18.9613V30.5L10.7552 30.5V18.9613Z" stroke="inherit" stroke-width="2" stroke-miterlimit="5.49776"/>
                      </svg>
                      `,
          }}
          keyboardRef={(r: KeyboardReactInterface) => (keyboard.current = r)}
          onChange={handleKeyboardChange}
          onKeyPress={keyboardOnKeyPress}
          layoutName={layoutName}
          theme={"hg-theme-default hg-layout-default myTheme"}
          layout={{
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "{lock} z x c v b n m ä ü ö {bksp}",
              "0 1 2 3 4 5 6 7 8 9",
              ". _ - {space} @ {enter}",
            ],
            shift: [
              "Q W E R T Y U I O P",
              "A S D F G H J K L",
              "{lock} Z X C V B N M Ä Ü Ö {bksp}",
              "0 1 2 3 4 5 6 7 8 9",
              ". _ - {space} @ {enter}",
            ],
          }}
        />
      </motion.div>
    </motion.main>
  );
}
