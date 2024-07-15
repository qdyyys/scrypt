import Header from "../components/Header";
import { ThemeProps } from "../types";
import ExchangeCoins from "../components/ExchangeCoins";
import Footer from "../components/Footer";

const Exchange: React.FC<ThemeProps> = ({ lightTheme, setLightTheme }) => {
  return (
    <main
      className={`transition-all duration-200 flex flex-col px-[20px] ${
        lightTheme ? "bg-lightBg" : "bg-darkBg"
      } transition min-h-screen`}
    >
      <Header setLightTheme={setLightTheme} lightTheme={lightTheme} />
      <ExchangeCoins setLightTheme={setLightTheme} lightTheme={lightTheme} />

      <Footer lightTheme={lightTheme} />
    </main>
  );
};
export default Exchange;
