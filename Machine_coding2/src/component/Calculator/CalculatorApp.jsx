import React from 'react'
import Calculator from './Calculator'
import styles from "./CalculatorApp.module.css";

export default function CalculatorApp() {
  return (
    <div className={styles.CalculatorApp}>
        <Calculator/>
    </div>
  )
}
