import React from 'react'
import styles from './HomePage.module.css'
import Button from './Button'
const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innercontainer}>
          <div className={styles.firsttext}>
            <p>You got the travel plans, we got the travel vans.</p>
          </div>
          <div className={styles.secondtext}>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
          </div>
          <div>
                <Button text='Find your van'/>
          </div>
      </div>
    </section>
  )
}

export default HomePage
