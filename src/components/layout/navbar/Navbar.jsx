import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './Navbar.module.css'

import imagelogo from './../../../assets/Logo (1).svg'
import { Button } from '../../common/button/Button'

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
        <img src={imagelogo} alt="imagelogo" />
        <ul className={styles.menu}>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Features</li>
            <li className={styles.menuItem}>Pricing</li>
            <li className={styles.menuItem}>Testimonials</li>
            <li className={styles.menuItem}>Help</li>
        </ul>
        <div className={styles.navbuttons}>
            <Button
            label="Login"
            onClick={() => navigate("/auth/login")}
            variant="primary"
            />
            <Button
            label="Register"
            onClick={() => navigate("/auth/register")}
            variant="secondary"
            />
        </div>
    </nav>
  )
}
