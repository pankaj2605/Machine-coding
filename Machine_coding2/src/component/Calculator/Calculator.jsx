import React from 'react'
import styles from "./Calculator.module.css"
import { useState } from 'react';

export default function Calculator() {
    const [display, setDisplay] = useState('');
    const [operand1, setOperand1] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleClearClick=()=>{

    }

    const handleOperatorClick=(op)=>{

    }
    const handleNumberClick=(num)=>{

    }
    const handleEqualClick=()=>{
        
    }
  return (
    <div className={styles.calculator_container}>
        <div className={styles.calculator_body}>
            <div className={styles.calculator_display}>{display || '0'}</div>
            <button className={styles.calculator_button} onClick={handleClearClick}>C</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleOperatorClick('/')}>/</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleOperatorClick('*')}>*</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleOperatorClick('*')}> </button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("7")}>7</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("8")}>8</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("9")}>9</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleOperatorClick('-')}>-</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("4")}>4</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("5")}>5</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("6")}>6</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleOperatorClick('+')}>+</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("1")}>1</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("2")}>2</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("3")}>3</button>
            <button className={[styles.calculator_button ,styles.operator].join(' ')} onClick={() => handleEqualClick('=')}>=</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick("0")} style={{ gridColumn: 'span 2' }}>0</button>
            <button className={styles.calculator_button} onClick={()=>handleNumberClick(".")}>.</button>

        </div>
    </div>
  )
}
