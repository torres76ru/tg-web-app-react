import React, { useEffect } from "react";

const tg = window.Telegram.WebApp;

const App = () => {
  useEffect(() => {
    tg.ready();
  });

  const onClose = () => {
    tg.close();
  };

  return (
    <div>
      App
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default App;
