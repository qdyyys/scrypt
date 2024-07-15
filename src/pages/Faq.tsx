import Header from "../components/Header";
import { ThemeProps } from "../types";

const Faq: React.FC<ThemeProps> = ({ lightTheme, setLightTheme }) => {
  return (
    <main
      className={`flex flex-col ${
        lightTheme ? "bg-lightBg" : "bg-darkBg"
      } transition min-h-screen`}
    >
      <Header lightTheme={lightTheme} setLightTheme={setLightTheme}></Header>
    </main>
  );
};
export default Faq;
