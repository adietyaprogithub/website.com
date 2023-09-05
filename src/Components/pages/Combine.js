import React from 'react'
import Info from '../info/Info'
import Placed from '../Placed/Placed'
import styles from './Combine.module.css'

export default function Combine() {
  return (
    <div className={styles.container}>
        <Info/>
        <Placed/>
    </div>
  )
}
