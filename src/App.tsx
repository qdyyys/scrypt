import { useState } from "react";
import Exchange from "./pages/Exchange";
import { Routes, Route } from "react-router-dom";
import Rules from "./pages/Rules";
import Faq from "./pages/Faq";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Exchange lightTheme={lightTheme} setLightTheme={setLightTheme} />
          }
        />
        <Route
          path="/rules"
          element={
            <Rules lightTheme={lightTheme} setLightTheme={setLightTheme} />
          }
        />
        <Route
          path="/faq"
          element={
            <Faq lightTheme={lightTheme} setLightTheme={setLightTheme} />
          }
        />
      </Routes>
    </>
  );
  2;
}

export default App;
