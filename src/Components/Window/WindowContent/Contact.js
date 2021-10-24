import { memo } from 'react'

import styles from './Contact.module.css'
import FacebookIcon from '../../Icons/Socials/FacebookIcon'
import TwitterIcon from '../../Icons/Socials/TwitterIcon'
import GithubIcon from '../../Icons/Socials/GithubIcon'
import LinkedInIcon from '../../Icons/Socials/LinkedInIcon'

const Contact = () => {
  return (
    <section className={styles['contact-container']}>
      <div>
        <FacebookIcon href='https://www.facebook.com/profile.php?id=100014531984250' />
        <TwitterIcon href='https://twitter.com/honza_greb' />
        <LinkedInIcon href='https://www.linkedin.com/in/jan-grebennikov-421a87222/' />
        <GithubIcon href='https://github.com/HonzaGreb' />
      </div>
      <h4>Email:</h4>
      <p>jgrebennikov@gmail.com</p>
      <h4>Telefonní číslo:</h4>
      <p>+420 606 610 638</p>
    </section>
  )
}

export default memo(Contact)
