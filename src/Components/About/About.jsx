import React from 'react'
import styles from './About.module.css'
import Button from './Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <img src="../images/image 54.png" alt="" width="100%" height="100%"/>
      </div>
      <div className={styles.textcontainer}>
          <div className={styles.text1}>
                <p>Don’t squeeze in a sedan when you could relax in a van.</p>
          </div>
          <div className={styles.text2}>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </div>
          <div>
              <div className={styles.card}>
                <div className={styles.cardcontainer}>
                <div className={styles.cardtext}>
                  <p>
                    Your destination is waiting.Your van is ready.
                  </p>
                </div>
                <div className={styles.buton}>
                  <Button/>
                </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About
