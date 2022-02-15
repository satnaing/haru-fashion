import { createContext, ReactNode, useContext, useState } from "react";

type authContextType = {
  user: boolean | null;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

// export function useAuth() {
//   return useContext(AuthContext);
// }

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<boolean | null>(null);

  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  const value = {
    user,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
