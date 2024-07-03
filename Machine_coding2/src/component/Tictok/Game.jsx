import React from 'react'
import styles from "./Tictok.module.css"
import Board from './Board'

export default function Game() {
  return (
    <div className={styles.game}>
        <div >
            <Board/>
        </div>
    </div>
  )
}
