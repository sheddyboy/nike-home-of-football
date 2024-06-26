"use client";
import Footer from "@/components/Footer";
import NavBtn from "@/components/NavBtn";
import Option from "@/components/Option";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FormCtx } from "@/context/form/FormProvider";

export default function Game() {
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
      <h1 className="h3 mb-[227px] gap-[27.5px] text-center">
        {en ? "Choose your GAME" : "Wähle dein SPIEL"}
      </h1>
      <div className="mb-[227.32px] flex w-full flex-col gap-[27.5px] px-[55px]">
        <Option
          active={state.game.speed}
          onClick={() =>
            dispatch({
              type: "game",
              payload: {
                speed: true,
                touch: false,
                precision: false,
                next: true,
                value: "Speed",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <svg
              width="255"
              height="35"
              viewBox="0 0 255 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_393_891)">
                <path
                  d="M88.5686 8.83295H91.5986C94.9133 8.83295 96.9062 10.4598 96.9062 13.1848C96.9062 14.5676 96.3775 17.801 91.4969 17.801H88.5686V8.83295ZM97.1096 33.6832L97.2316 33.8256H105.285C105.285 33.8256 97.7603 23.0476 97.496 22.6816C102.824 21.2784 104.776 16.6419 104.776 12.7171C104.776 9.15833 103.292 5.88427 100.831 3.93204C98.8381 2.38653 96.7639 1.61377 90.9072 1.61377H80.719V33.8256H88.5686V19.6922C88.7109 19.9159 95.3607 31.2023 97.1299 33.6629"
                  fill="black"
                />
                <path
                  d="M123.465 7.24686C127.715 7.24686 130.115 9.97185 131.009 11.009L131.457 11.5174H139.449L138.35 9.60581C137.517 8.18231 136.276 6.00638 133.368 3.93214C129.403 1.04447 125.071 0.759766 123.383 0.759766C114.09 0.759766 106.545 8.30432 106.545 17.5977C106.545 26.8912 114.07 34.6798 123.343 34.6798C129.565 34.6798 135.117 31.4464 138.188 25.9964L139.205 24.1865H131.111L130.745 24.6136C128.793 26.9115 126.108 28.213 123.383 28.213C117.974 28.213 113.399 23.3731 113.399 17.6588C113.399 11.9444 117.913 7.2672 123.465 7.2672"
                  fill="black"
                />
                <path
                  d="M162.489 31.6497C164.726 29.5144 165.865 26.5047 165.865 23.0477V1.6748H160.232V22.9053C160.232 28.7213 155.372 29.3517 154.212 29.3517C153.196 29.3517 148.193 28.7213 148.193 22.9053V1.6748H142.58V23.0477C142.58 26.5047 143.699 29.5144 145.915 31.6293C148.152 33.4799 151.426 34.5984 154.233 34.5984C157.039 34.5984 160.333 33.4799 162.53 31.6497"
                  fill="black"
                />
                <path
                  d="M175.992 18.0045V6.25049H180.69C185.753 6.25049 187.543 9.34152 187.543 11.9852C187.543 15.9303 184.574 18.0249 178.981 18.0249H175.972L175.992 18.0045ZM192.545 11.9648C192.545 8.97548 191.447 6.10814 189.576 4.33893C187.604 2.46804 184.96 1.63428 181.015 1.63428H171.03V33.7241H176.012V19.6314C176.622 20.4245 186.912 33.7241 186.912 33.7241H193.176C193.176 33.7241 184.065 22.3971 183.659 21.8683C185.326 21.726 192.566 20.6889 192.566 11.9648"
                  fill="black"
                />
                <path
                  d="M202.205 1.59375H197.609V33.7852H202.205V1.59375Z"
                  fill="black"
                />
                <path
                  d="M214.345 20.3433C214.671 19.4892 219.165 7.47078 219.754 5.92526C220.344 7.47078 224.879 19.4892 225.204 20.3433H214.345ZM217.68 1.59375L205.235 33.7649H209.241C209.241 33.7649 212.84 24.3088 213.003 23.8817H226.526C226.689 24.3088 230.227 33.7649 230.227 33.7649H234.335L221.951 1.59375H217.68Z"
                  fill="black"
                />
                <path
                  d="M241.026 30.4705V1.59375H237.853V33.5819H254.203V30.4705H241.026Z"
                  fill="black"
                />
                <path
                  d="M54.9335 33.8257H73.2356V33.846H75.4116V26.2608H65.9961V21.3599H75.1269V14.5881H65.9961V9.50415H75.4116V1.51221H54.8928L63.8405 17.6994L54.9335 33.8257Z"
                  fill="black"
                />
                <path
                  d="M53.2049 1.51221H45.9653L54.8927 17.6994L46.006 33.8257H53.2455L62.1322 17.6994L53.2049 1.51221Z"
                  fill="black"
                />
                <path
                  d="M37.709 33.8257H44.3182L53.2049 17.6994L44.2775 1.51221H39.7426L31.2626 16.5403V1.51221H20.1186L0.0065918 33.8257H13.0215C13.7739 32.5039 21.1151 19.7127 21.6641 18.8586V33.8257H30.4695C31.0593 32.6665 35.9195 23.2714 37.6887 19.9974V33.8257H37.709Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_393_891">
                  <rect
                    width="254.197"
                    height="33.92"
                    fill="white"
                    transform="translate(0.0065918 0.759766)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="h2">SPEED TRIAL</span>
          </div>
        </Option>
        <Option
          active={state.game.touch}
          onClick={() =>
            dispatch({
              type: "game",
              payload: {
                speed: false,
                touch: true,
                precision: false,
                next: true,
                value: "Touch",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <svg
              width="268"
              height="35"
              viewBox="0 0 268 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_393_232)">
                <path
                  d="M90.2834 26.0201H71.7898V21.2786H85.2683V13.7685H71.7898V9.5409H89.6534V2.02246H63.3347V33.5468H90.2834V26.0201Z"
                  fill="black"
                />
                <path
                  d="M171.428 28.0261C177.073 28.0261 180.455 26.6501 182.834 24.1384C185.022 21.8837 186.282 18.5017 186.282 15.0533C186.282 11.6049 185.031 8.22289 182.834 5.96819C180.389 3.39849 177.065 2.02246 171.428 2.02246H154.949V33.5551H163.404V28.0344H171.428V28.0261ZM176.385 11.2899C177.322 12.2847 177.827 13.6027 177.827 15.0533C177.827 16.5039 177.33 17.7473 176.385 18.7504C175.382 19.8114 173.94 20.5077 171.055 20.5077H163.404V9.5409H171.055C173.94 9.5409 175.374 10.2289 176.385 11.2982"
                  fill="black"
                />
                <path
                  d="M229.163 20.0267L267.311 18.1533C267.791 18.1285 267.791 17.4156 267.311 17.399L229.163 15.5339C228.135 7.22799 221.462 0.828613 212.112 0.828613C201.933 0.828613 194.92 8.41336 194.92 17.7886C194.92 27.1639 201.941 34.7486 212.112 34.7486C221.462 34.7486 228.143 28.3492 229.163 20.035M212.112 27.4208C209.202 27.4208 206.707 26.1111 205.041 24.0554C204.428 22.5799 205.522 21.4608 206.74 21.3862H206.168L220.973 20.5158C219.887 24.4947 216.456 27.4208 212.112 27.4208ZM206.044 14.1993H206.74C205.522 14.1247 204.428 13.0057 205.041 11.5302C206.699 9.4744 209.202 8.16468 212.112 8.16468C216.464 8.16468 219.887 11.0908 220.973 15.0697L206.044 14.2076V14.1993Z"
                  fill="black"
                />
                <path
                  d="M137.906 2.02246L121.924 22.3314L105.942 2.02246H99.9902V33.5468L108.445 33.5385V19.198L120.067 33.5385H123.781L135.394 19.198V33.5385L143.857 33.5468V2.02246H137.906Z"
                  fill="black"
                />
                <path
                  d="M51.8707 2.02246H43.4155V33.5468H51.8707V2.02246Z"
                  fill="black"
                />
                <path
                  d="M33.1201 2.02246H0.534668V9.5409H12.8609V33.5468H21.3243L21.4404 9.53261H33.1201V2.02246Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_393_232">
                  <rect
                    width="267.141"
                    height="33.92"
                    fill="white"
                    transform="translate(0.534668 0.820312)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="h2">TOUCH TRIAL</span>
          </div>
        </Option>
        <Option
          active={state.game.precision}
          onClick={() =>
            dispatch({
              type: "game",
              payload: {
                speed: false,
                touch: false,
                precision: true,
                next: true,
                value: "Precision",
              },
            })
          }
        >
          <div className="flex flex-col items-center gap-[13.75px]">
            <svg
              width="296"
              height="35"
              viewBox="0 0 296 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_393_205)">
                <path
                  d="M127.984 24.7309L105.368 1.69727V1.71466L105.359 1.69727L105.299 33.7913H112.203L112.237 18.2616L127.558 33.8174L134.784 33.8348L134.845 1.74074L128.028 1.73205L127.984 24.7309Z"
                  fill="black"
                />
                <path
                  d="M228.675 1.85352L228.657 11.4182L250.856 33.9649L260.334 33.9736L228.675 1.85352Z"
                  fill="black"
                />
                <path
                  d="M209.841 1.84503L209.832 1.82764L209.771 33.9129L216.675 33.9216L216.702 18.392L232.023 33.939L241.492 33.9477L209.841 1.82764V1.84503Z"
                  fill="black"
                />
                <path
                  d="M99.8989 1.68848L68.1179 33.739L77.587 33.7564L92.9601 18.2355L92.9427 33.7738H99.8467L99.9076 1.68848L99.8989 1.71456V1.68848Z"
                  fill="black"
                />
                <path
                  d="M59.5618 14.1576L43.4931 14.1402L43.5105 1.62784L36.3978 1.61914L36.3369 33.7044L43.4496 33.7131L43.4844 21.2007L59.5531 21.2181L59.5357 33.7305L66.6484 33.7392L66.7093 1.65392L59.5879 1.64523L59.5618 14.1576Z"
                  fill="black"
                />
                <path
                  d="M8.03394 15.9315L8.05133 8.68836H18.3465L19.3812 8.78401L20.1811 8.99269L20.9898 9.35789L21.5463 9.75787L22.0332 10.2709L22.4071 10.8709L22.6332 11.4795L22.7375 12.1404V12.3664L22.6506 13.149L22.4419 13.7751L22.0506 14.4185L21.5985 14.8793L20.9985 15.3054L20.2681 15.6358L19.5116 15.8358L18.6334 15.9315H18.3204H8.02524H8.03394ZM0.886475 33.661H8.00785L8.02524 23.0441H18.2247L19.4942 23.0007L20.9811 22.8094L22.2593 22.5137L23.3549 22.1398L24.5896 21.566L25.5896 20.9312L26.6504 20.0617L27.4503 19.2183L28.2329 18.1401L28.9111 16.8706L29.4155 15.488L29.7198 14.1663L29.8589 12.7751L29.8763 12.3056L29.8067 11.0622L29.6328 9.93178L29.2502 8.58402L28.7633 7.42756L28.2068 6.45369L27.3895 5.3581L26.5547 4.50597L25.4417 3.61906L24.3983 3.01039L23.1462 2.4452L21.7289 2.01044L20.329 1.74959L18.7638 1.61916H18.2247L0.947341 1.57568L0.886475 33.661Z"
                  fill="black"
                />
                <path
                  d="M139.758 1.74942L139.74 8.8447H139.758L139.775 8.8621V8.8447L150.496 8.8621L150.444 33.8434L157.565 33.8521L157.609 8.87079L168.4 8.87949L168.417 1.7755L139.792 1.74072L139.758 1.74942Z"
                  fill="black"
                />
                <path
                  d="M186.199 27.6263L185.077 27.4437L183.782 27.0785L182.686 26.6177L181.773 26.096L180.773 25.3569L179.999 24.6178L179.225 23.6439L178.686 22.7657L178.208 21.7136L177.843 20.5658L177.625 19.4528L177.521 18.2442V17.8268L177.582 16.5834L177.773 15.4791L178.156 14.1922L178.643 13.114L179.173 12.2184L179.947 11.2272L180.712 10.462L181.695 9.68813L182.903 8.99251L183.903 8.58384L184.981 8.27081L186.373 8.03604L187.512 7.98387L188.773 8.05343L189.894 8.22733L191.199 8.59253L192.294 9.05338L193.207 9.57509L194.207 10.3142L194.981 11.0533L195.755 12.0271L196.294 12.9054L196.772 13.9575L197.137 15.1052L197.355 16.2182L197.459 17.4269V17.8442L197.398 19.0877L197.207 20.1832L196.824 21.4701L196.346 22.557L195.807 23.4526L195.042 24.4352L194.277 25.2004L193.294 25.9656L192.085 26.6525L191.086 27.0699L190.007 27.3829L188.616 27.6176L187.486 27.6698L186.216 27.6003L186.199 27.6263ZM187.52 0.879883L185.929 0.949444L184.46 1.12335L182.677 1.49724L181.103 1.99287L179.712 2.57545L178.104 3.44497L176.756 4.37536L175.634 5.31444L174.408 6.58394L173.46 7.79257L172.513 9.30554L171.852 10.6533L171.26 12.2097L170.808 13.8966L170.539 15.5052L170.408 17.2356V17.8268L170.46 19.505L170.652 21.0354L171.043 22.8614L171.556 24.4613L172.165 25.8525L172.834 27.0699L173.773 28.4611L174.747 29.6089L175.712 30.5566L176.973 31.574L178.147 32.3565L179.608 33.1391L181.312 33.826L182.686 34.2347L184.129 34.539L185.964 34.7651L187.442 34.8173L189.033 34.7564L190.494 34.5825L192.277 34.2086L193.851 33.713L195.242 33.1304L196.85 32.2609L198.198 31.3305L199.32 30.3827L200.546 29.1219L201.494 27.9133L202.441 26.4003L203.102 25.0526L203.694 23.4961L204.137 21.8179L204.407 20.2006L204.537 18.4703V17.879L204.476 16.2008L204.285 14.6705L203.998 13.2879L203.494 11.6359L202.894 10.1925L202.233 8.94034L201.276 7.49694L200.294 6.30569L199.32 5.33183L198.042 4.27101L196.842 3.45366L195.372 2.65371L193.651 1.932L192.268 1.50594L190.807 1.19291L188.973 0.95814L187.503 0.897273L187.52 0.879883Z"
                  fill="black"
                />
                <path
                  d="M275.342 15.2881L274.586 14.2186C274.473 14.0621 274.299 13.9751 274.107 13.9664C269.612 13.949 265.125 13.9316 260.638 13.9229C259.534 13.9229 258.56 13.5664 257.673 12.9578C256.187 11.9317 255.717 10.297 256.543 8.92319C257.065 8.06236 257.804 7.38414 258.804 7.14936C259.656 6.94068 260.543 6.77547 261.421 6.77547C268.186 6.76678 274.942 6.80156 281.707 6.82764C282.133 6.82764 282.403 6.70591 282.655 6.3668C283.176 5.65379 283.75 4.97556 284.289 4.27125C284.794 3.61911 285.272 2.96697 285.811 2.24527C285.55 2.22788 285.368 2.21049 285.194 2.21049C283.985 2.21049 282.776 2.20179 281.568 2.1931C274.916 2.17571 268.273 2.15832 261.621 2.12354C261.543 2.12354 261.464 2.12354 261.386 2.12354C259.63 2.14093 257.943 2.49743 256.317 3.14087C254.926 3.68867 253.682 4.50602 252.648 5.6277C251.43 6.95807 250.639 8.47973 250.648 10.297C250.656 12.8099 251.952 14.6968 253.891 16.1576C255.76 17.5749 257.917 18.314 260.238 18.4618C262.238 18.5836 264.238 18.5401 266.238 18.5749C266.438 18.5749 266.629 18.601 266.934 18.6096C266.012 19.8096 264.351 22.0616 263.438 23.2529C265.569 23.2529 267.542 23.2703 269.525 23.2529C269.681 23.2529 269.873 23.1138 269.968 22.9833C270.977 21.6877 272.777 19.2444 273.777 17.9488C274.281 17.2967 274.786 16.6445 275.307 15.975C275.464 15.7663 275.472 15.4881 275.325 15.2707"
                  fill="black"
                />
                <path
                  d="M286.116 14.8096L295.324 2.23632H291.237C290.95 2.21893 290.672 2.35806 290.498 2.58413L284.333 10.4011C283.916 10.9576 283.272 11.2533 282.568 11.1924C281.977 11.1402 281.446 10.8011 281.098 10.3229L280.568 9.60117C280.385 9.34901 280.09 9.20119 279.785 9.20119L275.212 9.1838L279.325 14.7748C279.838 15.4791 279.838 16.4356 279.325 17.1312L274.742 23.2787L279.385 23.2961C279.646 23.2961 279.89 23.1744 280.046 22.9657L281.124 21.5223C281.533 20.9658 282.185 20.6702 282.89 20.731C283.481 20.7832 284.003 21.1223 284.359 21.5919L285.368 22.9657C285.533 23.1918 285.794 23.3222 286.072 23.3222L290.515 23.3396L286.124 17.1486C285.603 16.4443 285.603 15.4965 286.124 14.8009"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_393_205">
                  <rect
                    width="294.437"
                    height="33.92"
                    fill="white"
                    transform="translate(0.886475 0.879883)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="h2">PRECISION TRIAL</span>
          </div>
        </Option>
      </div>
      <div className="mb-[166px] flex w-full justify-between px-[55px]">
        <span className="w-[310px]">
          <NavBtn
            text={en ? "PREVIOUS" : "ZURÜCK"}
            link="/leaderboard"
            active={true}
          />
        </span>
        <span className="w-[310px]">
          <NavBtn
            text={en ? "NEXT" : "WEITER"}
            link="/register"
            active={state.game.next}
          />
        </span>
      </div>
      <Footer />
    </motion.main>
  );
}
