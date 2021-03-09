import React from 'react'
import styles from './hero.module.scss'

export const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div class="brand">
                <img className={styles.gear, styles.gearTop} src="img/gear.svg" alt="gear" />
                <img className={styles.brandLogo} src="img/logos/white-logo.png" alt="servinorte logo" />
                <img className={styles.gear, styles.gearBottom} src="img/gear.svg" alt="gear" />
            </div>
            <div className={styles.contact}>
                <form className={styles.contactForm} action="#">
                    <h1>CONTACTENOS</h1>
                    <div className={styles.groupInput}>

                        <div className={styles.groupInputControl}>
                            <label for="name"><i className="fa fa-user"></i> NOMBRE</label>
                            <input name="name" id="name" type="text" required />
                        </div>

                        <div className={styles.groupInputControl}>
                            <label for="email"><i className="fa fa-envelope"></i> EMAIL</label>
                            <input name="email" id="email" type="email" required />
                        </div>

                    </div>
                    <label for="message"><i className="fa fa-envelope-open-text"></i> MENSAJE</label>
                    <textarea name="message" className={styles.message} id="message" cols="30" rows="10"></textarea>
                    <button type="submit"><i className="fa fa-paper-plane"></i> ENVIAR</button>
                </form>
            </div>
        </div>
    )
}
