import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div>App</div>;
};

export default App;
