import React from 'react'
import styles from './Button.module.css'

export const Button = ({label, variant, onClick}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
        {label}
    </button>
  )
}
