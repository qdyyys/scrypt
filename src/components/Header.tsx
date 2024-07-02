import Logo from "./Logo";
import { ThemeProps } from "../types";
import DarkIco from "./DarkIco";
import LightIco from "./LightIco";

const Header: React.FC<ThemeProps> = ({ lightTheme, setLightTheme }) => {
  return (
    <header className="font-SFProRegular max-w-[940px] mx-auto flex justify-between py-[26px] items-center">
      <div
        className={`flex gap-[12px] font-TTFirsNeueDemiBold select-none text-[20px] items-center cursor-pointer ${
          lightTheme ? "text-black" : "text-white"
        }`}
      >
        <Logo size={22} />
        Scrypt
      </div>

      <nav>
        <ul
          className={`flex gap-[14px] text-darkGray text-[14px] items-center ${
            lightTheme ? "text-darkGray" : "text-lightGray"
          }`}
        >
          <li
            className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
              lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
            }`}
          >
            Обмен
          </li>
          <li
            className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
              lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
            }`}
          >
            Правила
          </li>
          <li
            className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
              lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
            }`}
          >
            Контакты
          </li>
          <li
            className={`cursor-pointer py-[3px] px-[10px] rounded-[24px] transition ${
              lightTheme ? "hover:bg-[#100f1b0d]" : "hover:bg-lightGray/30"
            }`}
          >
            FAQ
          </li>
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
    </header>
  );
};

export default Header;
