import React from 'react'
import styles from "./Tictok.module.css"

export default function Square({value,onClick}) {
  return (
    <button className={styles.square} onClick={onClick}>
        {value}
    </button>
  )
}
