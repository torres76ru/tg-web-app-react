import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
};

export default App;
