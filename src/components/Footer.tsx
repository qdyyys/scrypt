import Logo from "./Logo";
import { IoOpenOutline } from "react-icons/io5";
import { ThemeProps } from "../types";

const Footer: React.FC<ThemeProps> = ({ lightTheme }) => {
  return (
    <footer className="max-w-[840px] w-[840px] shrink-0 mx-auto bottom-0 ">
      <div
        className={`pb-[48px] flex items-center justify-between ${
          lightTheme ? "text-[#100F1B99]" : "text-[#ECEAFF99]"
        }`}
      >
        <div className="flex items-center gap-[12px] text-[20px]">
          <Logo size={22} color={`${lightTheme ? "#100F1B73" : "#ECEAFF73"}`} />
          Scrypt
        </div>
        <div
          className="flex items-center text-[20px] gap-[12px] cursor-pointer"
          onClick={() => window.open("https://t.me/qdyyys")}
        >
          Telegram
          <IoOpenOutline />
        </div>
      </div>

      <div
        className={`pb-[24px] flex items-center justify-between ${
          lightTheme ? "text-[#100F1B99]" : "text-[#ECEAFF99]"
        }`}
      >
        <div className="flex gap-5">
          <p>www.scrypt.com</p>
          <p className="bg-gradient-to-r from-[#62A6F6] to-[#6D68F5] bg-clip-text text-transparent">
            Prod BCD.AGENCY
          </p>
        </div>
        <div>@ Scrypt, Inc</div>
      </div>
    </footer>
  );
};
export default Footer;
