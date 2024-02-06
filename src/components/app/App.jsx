import React, { useEffect, useState } from "react";
import {GlobalContext} from "../../share/context";

import Main from "../Main/Main";

export default function App() {
  const [isAuthentication, setIsAuthentication] = useState(false);

  useEffect(() => {
    const tokenValue = localStorage.getItem("token");
    setIsAuthentication(!!tokenValue);
  }, []);

  const toggleAuth = () => {
    if (isAuthentication) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", "llll");
    }
    setIsAuthentication(!isAuthentication);
  };

  console.log(isAuthentication);

  return (
    <GlobalContext.Provider value={{ isAuthentication, toggleAuth }}>
      <Main />
    </GlobalContext.Provider>
  );
}
