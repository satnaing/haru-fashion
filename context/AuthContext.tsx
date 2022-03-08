import axios from "axios";
import { getCookie, removeCookies, setCookies } from "cookies-next";
import React, { useState, useEffect, useContext, createContext } from "react";

type authType = {
  user: null | User;
  register?: (
    email: string,
    fullname: string,
    password: string,
    shippingAddress: string,
    phone: string
  ) => Promise<{
    success: boolean;
    message: string;
  }>;
  login?: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    message: string;
  }>;
  forgotPassword?: (email: string) => Promise<{
    success: boolean;
    message: string;
  }>;
  logout?: () => void;
};

const initialAuth: authType = {
  user: null,
};

const authContext = createContext<authType>(initialAuth);

type User = {
  id: number;
  email: string;
  fullname: string;
  shippingAddress?: string;
  phone?: string;
  token: string;
};

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initialAuth = getCookie("user");
    if (initialAuth) {
      const initUser = JSON.parse(initialAuth as string);
      setUser(initUser);
    }
  }, []);

  useEffect(() => {
    setCookies("user", user);
  }, [user]);

  const register = async (
    email: string,
    fullname: string,
    password: string,
    shippingAddress: string,
    phone: string
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
        {
          email,
          fullname,
          password,
          shippingAddress,
          phone,
        }
      );
      const registerResponse = response.data;
      const user: User = {
        id: +registerResponse.id,
        email,
        fullname,
        shippingAddress,
        phone,
        token: registerResponse.token,
      };
      setUser(user);
      return {
        success: true,
        message: "register_successful",
      };
    } catch (err) {
      const errResponse = (err as any).response.data;
      let errorMessage: string;
      if (errResponse.error.type === "alreadyExists") {
        errorMessage = errResponse.error.type;
      } else {
        errorMessage = errResponse.error.detail.message;
      }
      return {
        success: false,
        message: errorMessage,
      };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      const loginResponse = response.data;
      const user: User = {
        id: +loginResponse.data.id,
        email,
        fullname: loginResponse.data.fullname,
        phone: loginResponse.data.phone,
        shippingAddress: loginResponse.data.shippingAddress,
        token: loginResponse.token,
      };
      setUser(user);
      return {
        success: true,
        message: "login_successful",
      };
    } catch (err) {
      return {
        success: false,
        message: "incorrect",
      };
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/forgot-password`,
        {
          email,
        }
      );
      const forgotPasswordResponse = response.data;
      setUser(user);
      return {
        success: forgotPasswordResponse.success,
        message: "reset_email_sent",
      };
    } catch (err) {
      console.log(err);
      return {
        success: false,
        message: "something_went_wrong",
      };
    }
  };

  const logout = () => {
    setUser(null);
    removeCookies("user");
  };

  // Return the user object and auth methods
  return {
    user,
    register,
    login,
    forgotPassword,
    logout,
  };
}
