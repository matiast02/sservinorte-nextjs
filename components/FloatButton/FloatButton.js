import React from 'react'
import styles from './float-button.module.scss'

export const FloatButton = ({ handleClick }) => {
    return (
    <button className={styles.floatButton} onClick={handleClick} >
        <img src="../img/marker.gif" alt="marker gift" />
    </button>
    )
}
