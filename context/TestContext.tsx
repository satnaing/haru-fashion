import { createContext } from "react";

export const TestContext = createContext(null);

const TextProvider = ({ children, user = null }) => {
  console.log(user);
  const val = user;
  return <TestContext.Provider value={val}>{children}</TestContext.Provider>;
};

export default TextProvider;
