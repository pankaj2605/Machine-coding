import React from 'react'
import styles from "./Tictok.module.css"
import Game from './Game'

export default function Tictok() {
  return (
    <div className={styles.App}>
      <Game />
    </div>
  )
}
