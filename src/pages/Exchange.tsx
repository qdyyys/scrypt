import Header from "../components/Header";
import { ThemeProps } from "../types";
import ExchangeCoins from "../components/ExchangeCoins";

const Exchange: React.FC<ThemeProps> = ({ lightTheme, setLightTheme }) => {
  return (
    <main
      className={`${
        lightTheme ? "bg-lightBg" : "bg-darkBg"
      } transition min-h-screen`}
    >
      <Header setLightTheme={setLightTheme} lightTheme={lightTheme} />
      <ExchangeCoins setLightTheme={setLightTheme} lightTheme={lightTheme} />
    </main>
  );
};
export default Exchange;
