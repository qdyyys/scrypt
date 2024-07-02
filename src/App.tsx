import { useState } from "react";
import Exchange from "./pages/Exchange";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <>
      <Exchange lightTheme={lightTheme} setLightTheme={setLightTheme} />
    </>
  );
  2;
}

export default App;
