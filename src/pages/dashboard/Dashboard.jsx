import React from "react";
import styles from "./Dashboard.module.css";
import { Button } from "../../components/common/button/Button";

const Dashboard = ({setIsAuthenticated}) => {

  const logoutHandler = () => {
    localStorage.removeItem("user-token");
    setIsAuthenticated(false)
  };
  
  return (
    <div>
      <h2>Dashboard</h2>
      <Button label="Logout" variant="danger" onClick={logoutHandler} />
    </div>
  );
};

export default Dashboard;
