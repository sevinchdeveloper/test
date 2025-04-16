import React, { useState } from "react";
import styles from "./Register.module.css";
import { Input } from "../../components/common/input/Input";
import { Button } from "../../components/common/button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = ({setIsAuthenticated}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => {
      const newUserData = { ...prevUserData, [name]: value };
      return newUserData;
    });
  };

  const registerBtnHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    if(!response.ok){
      const errorData = await response.json();
      alert(errorData.error || "Ro'yhatdan o'tishda xatolik")
      // alert("Ro'yhatdan o'tishda xatolik")
    }

    const data = await response.json()
    localStorage.setItem("user-token", data.token);
    setIsAuthenticated(true);
    navigate("/dashboard")
    
  };

  return (
    <div className={`${styles.registerbox} ${styles.container}`}>
      <h2>Register Page</h2>
      <form>
        <Input
          label="Email"
          placeholder="Enter your Email"
          type="email"
          onChange={handleChangeInputs}
          value={userData.email}
          name="email"
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          onChange={handleChangeInputs}
          value={userData.password}
          name="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Enter your Password"
          type="password"
          onChange={handleChangeInputs}
          value={userData.confirm}
          name="confirm"
        />
        <Button
          label="Register"
          variant="secondary"
          onClick={registerBtnHandler}
        />
        <p>
          Do you have an account: <Link to="/auth/login"> Login </Link>
        </p>
      </form>
    </div>
  );
};
