import React, { useState } from "react";
import styles from "./Login.module.css";
import { Input } from "../../components/common/input/Input";
import { Button } from "../../components/common/button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Login = () => {

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const changeEmailHandler = (e) => setEmailValue(e.target.value);
  const changePasswordHandler = (e) => setPasswordValue(e.target.value);


  const handleLogin = () => {
    navigate("/todo");
  };


  return (
    <div className={`${styles.loginbox} ${styles.container}`}>
      <h2>Login Page</h2>
      <form>
        <Input
          label="Email"
          placeholder="Enter your Email"
          type="email"
          onChange={changeEmailHandler}
          value={emailValue}
          name="email"
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          onChange={changePasswordHandler}
          value={passwordValue}
          name="password"
        />
        <Button label="Login" variant="primary" onClick={handleLogin} />
        <p>
          Do you have not an account <Link to="/auth/register"> Register </Link>
        </p>
      </form>
    </div>
  );
};
