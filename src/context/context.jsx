import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [flag, SetFlag] = useState(true);
  const [sign, setSign] = useState([]);
  const navigate = useNavigate();

  const handleSignUp = (el) => {
    const users = sign.find((elem) => el.email === elem.email);

    if (users !== undefined) {
      alert("Already Exists!!");
    } else {
      axios
        .post("https://real-tan-adder-hose.cyclic.app/user", el)
        .then((res) => getSignUpData());
      alert("Your account is created successfully");
      navigate("/login");
    }
  };

  async function getSignUpData() {
    const res = await axios.get(
      "https://real-tan-adder-hose.cyclic.app/user"
    );
      
    setSign(res.data);
    console.log(res.data);
  }

  const handleLogin = (el) => {
    const user = sign.find(
      (elem) => el.email === elem.email && el.password === elem.password
    );
    console.log(user)
    if (user === undefined) {
      alert("Wrong Credentials!!");
    } else {
      console.log(user);
      alert("Login Successfully!!");
      SetFlag(false);
      navigate("/");
    }
  };
  const handleLogout = () => {
    SetFlag(true);
  };
console.log(sign);
  useEffect(() => {
    getSignUpData();
  }, []);
  return (
    <div>
      <Context.Provider
        value={{ flag, handleSignUp, handleLogin, handleLogout }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};
export default ContextProvider;
