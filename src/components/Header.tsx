import Logo from "./Logo";
import { ThemeProps } from "../types";
import DarkIco from "./DarkIco";
import LightIco from "./LightIco";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

const Header: React.FC<ThemeProps> = ({ lightTheme, setLightTheme }) => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <header className="font-SFProRegular max-w-[940px] w-[940px] mx-auto flex justify-between py-[26px] items-center">
      <div className="font-SFProRegular max-w-[940px] w-[940px] mx-auto flex justify-between py-[26px] items-center main_menu">
        <Link to="/">
          <div
            className={`flex gap-[12px] font-TTFirsNeueDemiBold select-none text-[20px] items-center cursor-pointer ${
              lightTheme ? "text-black" : "text-white"
            }`}
          >
            <Logo size={22} />
            Scrypt
          </div>
        </Link>

        <nav>
          <ul
            className={`flex gap-[14px] text-darkGray text-[14px] items-center ${
              lightTheme ? "text-darkGray" : "text-lightGray"
            }`}
          >
            <Link to="/">
              <li
                className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                  lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
                }`}
              >
                Обмен
              </li>
            </Link>
            <Link to="/rules">
              <li
                className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                  lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
                }`}
              >
                Правила
              </li>
            </Link>
            <li
              className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
              }`}
            >
              Контакты
            </li>
            <Link to="/faq">
              <li
                className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                  lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
                }`}
              >
                FAQ
              </li>
            </Link>
          </ul>
        </nav>

        <div
          className={`flex rounded-[64px] relative transition p-[2px] ${
            lightTheme ? "bg-buttonGray" : "bg-buttonDarkGray"
          }`}
        >
          <LightIco
            color="green"
            lightTheme={lightTheme}
            setLightTheme={setLightTheme}
          />
          <DarkIco
            color="green"
            lightTheme={lightTheme}
            setLightTheme={setLightTheme}
          />
          <span
            className={`absolute w-1/2 h-full rounded-[64px] top-0 transition left-0 ease-out duration-200 ${
              lightTheme
                ? "bg-circleLightTheme translate-x-0"
                : "translate-x-full bg-circleDarkTheme"
            }`}
          ></span>
        </div>
      </div>

      <div className="items-center justify-between w-full menu hidden">
        <Link to="/">
          <div
            className={`flex gap-[12px] font-TTFirsNeueDemiBold select-none text-[20px] items-center cursor-pointer ${
              lightTheme ? "text-black" : "text-white"
            }`}
          >
            <Logo size={22} />
            Scrypt
          </div>
        </Link>
        <div
          className={`absolute right-0 z-10  top-0 rounded-xl flex flex-col gap-[10px] items-end pl-10 py-5`}
        >
          <LuMenu
            className={`cursor-pointer z-20 text-3xl relative top-[5px] right-6 ${
              lightTheme ? "text-black" : "text-white"
            }`}
            onClick={() => setShowBurger(!showBurger)}
          />
          <div
            className={`pl-10 pr-5 rounded-xl py-5 h-[300px] flex flex-col justify-end relative -top-[70px] transition ${
              lightTheme
                ? "bg-white text-black shadow-lightShadowBlock"
                : "bg-darkBg text-white shadow-darkSHadowBlock"
            } ${showBurger ? "trnslate-x-0" : "translate-x-[200px]"}`}
          >
            <div className="flex flex-col gap-5">
              <nav>
                <ul
                  className={`flex gap-[14px] text-darkGray text-[14px] flex-col items-end ${
                    lightTheme ? "text-darkGray" : "text-lightGray"
                  }`}
                >
                  <Link to="/">
                    <li
                      className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                        lightTheme
                          ? "hover:bg-[#100f1b0d]"
                          : "hover:bg-lightGray/30"
                      }`}
                    >
                      Обмен
                    </li>
                  </Link>
                  <Link to="/rules">
                    <li
                      className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                        lightTheme
                          ? "hover:bg-[#100f1b0d]"
                          : "hover:bg-lightGray/30"
                      }`}
                    >
                      Правила
                    </li>
                  </Link>
                  <li
                    className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                      lightTheme
                        ? "hover:bg-[#100f1b0d]"
                        : "hover:bg-lightGray/30"
                    }`}
                  >
                    Контакты
                  </li>
                  <Link to="/faq">
                    <li
                      className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
                        lightTheme
                          ? "hover:bg-[#100f1b0d]"
                          : "hover:bg-lightGray/30"
                      }`}
                    >
                      FAQ
                    </li>
                  </Link>
                </ul>
              </nav>

              <div
                className={`min-w-[100px] flex rounded-[64px] relative transition p-[2px] w-max ${
                  lightTheme ? "bg-buttonGray" : "bg-buttonDarkGray"
                }`}
              >
                <div className="flex justify-around w-full">
                  {" "}
                  <LightIco
                    color="green"
                    lightTheme={lightTheme}
                    setLightTheme={setLightTheme}
                  />
                  <DarkIco
                    color="green"
                    lightTheme={lightTheme}
                    setLightTheme={setLightTheme}
                  />
                </div>
                <span
                  className={`absolute w-1/2 h-full rounded-[64px] top-0 transition left-0 ease-out duration-200 ${
                    lightTheme
                      ? "bg-circleLightTheme translate-x-0"
                      : "translate-x-full bg-circleDarkTheme"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
