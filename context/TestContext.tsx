import { createContext } from "react";

export const TestContext = createContext(null);

const TextProvider = ({ children }) => {
  const val = "haha";
  return <TestContext.Provider value={val}>{children}</TestContext.Provider>;
};

export default TextProvider;
