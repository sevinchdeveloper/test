import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { Button } from "../../components/common/button/Button";

import heroimg from './../../assets/Illustration 1.svg'

export const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <h2>Want anything to be easy with LaslesVPN.</h2>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <Button 
            label="Get Started"
            variant="danger"          
          />
        </div>
        <img src={heroimg} alt="heroimg" />
      </div>
    </div>
  );
};
