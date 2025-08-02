import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ORIGIN_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  console.log(user);

  // Sayfa yüklendiğinde session kontrolü yap
  useEffect(() => {
    checkSession();
  }, []);

  const handleUserChange = (e) => {
    setUser((prevUser) => ({
      ...(prevUser || {}),
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${ORIGIN_URL}/users/register`, {
        username: user.username,
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
        age: user.age,
      });
      setUser(res.data.user);
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${ORIGIN_URL}/users/login`,
        {
          email: user.email,
          password: user.password,
        },
        {
          withCredentials: true,
        }
      );
      setUser(res.data.user);
      console.log(res.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${ORIGIN_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out user:", error);
    }
  };

  const checkSession = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${ORIGIN_URL}/users/check-session`, {
        withCredentials: true,
      });
      if (res.data.authenticated && res.data.user) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        handleUserChange,
        handleRegister,
        handleLogin,
        handleLogout,
        checkSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
