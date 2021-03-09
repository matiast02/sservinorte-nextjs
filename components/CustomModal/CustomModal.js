import React from 'react'
import styles from './custom-modal.module.scss'

export const CustomModal = ({ showModal , closeModal }) => {
    return (
    <div className={`${styles.customModal} ${showModal ? styles.showModal : styles.hideModal }`}>
        <div className={styles.customModalContainer}>
            <div className={styles.customModalContainerImg}>
                <img src="img/map.png" alt="ubicacion servinorte" />    
            </div>
            <div className={styles.customModalContainerInfo}>
                <h1>NOS PUEDEN ENCONTRAR EN</h1>
                <ul>
                    <li>
                        <i className="fa fa-map"></i>
                        <p>AVENIDA INDEPENDENCIA 726 - SALTA CAPTIAL, ARGENTINA</p>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <p> (387) 620-4499</p>
                    </li>
                </ul>
                
            </div>
            <button className={styles.closeButton} onClick={closeModal} href="#">X</button>
        </div>        
    </div>
    )
}
