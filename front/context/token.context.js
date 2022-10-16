import { createContext, useState } from "react";

export const tokenContext = createContext({
  token: "",
  setToken: (token) => {},
  deleteToken: () => {},
});

function TokenContextProvider({ children }) {
  const [state, setState] = useState("");

  function setToken(token) {
    setState(token);
  }

  function deleteToken() {
    setState("");
  }

  const value = {
    token: state,
    setToken: setToken,
    deleteToken: deleteToken,
  };

  return (
    <tokenContext.Provider value={value}>{children}</tokenContext.Provider>
  );
}

export default TokenContextProvider;
