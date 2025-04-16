import React from "react";
import styles from "./Input.module.css";

export const Input = ({label, placeholder, type, onChange, value, name}) => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};
