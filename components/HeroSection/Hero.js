import React from 'react'
import styles from '../../styles/hero-section/Hero.module.scss'

export const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div class="brand">
                <img className={styles.gear, styles.gearTop} src="img/gear.svg" alt="gear" />
                <img className="brand__logo" src="img/logos/white-logo.png" alt="servinorte logo" />
                <img className={styles.gear, styles.gearBottom} src="img/gear.svg" alt="gear" />
            </div>
            <div class="contact">
                <form class="contact__form" action="#">
                    <h1>CONTACTENOS</h1>
                    <div class="group-input">

                        <div class="group-input-vertical">
                            <label for="name"><i class="fa fa-user"></i> NOMBRE</label>
                            <input name="name" id="name" type="text" required />
                        </div>

                        <div class="group-input-vertical">
                            <label for="email"><i class="fa fa-envelope"></i> EMAIL</label>
                            <input name="email" id="email" type="email" required />
                        </div>

                    </div>
                    <label for="message"><i class="fa fa-envelope-open-text"></i> MENSAJE</label>
                    <textarea name="message" class="message" id="message" cols="30" rows="10"></textarea>
                    <button type="submit"><i class="fa fa-paper-plane"></i> ENVIAR</button>
                </form>
            </div>
        </div>
    )
}
