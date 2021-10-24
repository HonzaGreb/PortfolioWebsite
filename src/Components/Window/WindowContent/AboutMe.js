import { memo } from 'react'
import styles from './AboutMe.module.css'
import profile_pic from '../../../img/profile_pic.png'

const AboutMe = () => {
  return (
    <section className={styles['about-me-container']}>
      <div className={styles['pic-container']}>
        <img alt='profile_pic' src={profile_pic}></img>
        <h4>Jan Grebennikov</h4>
      </div>
      <p>Vítejte na mém webu!</p>
      <p>
        Jmenuji se Jan Grebennikov, je mi 20 let a pocházím z Rychnova nad Kněžnou. Věnuji se
        grafice a web-developmentu.
      </p>
      <h4>Dovednosti:</h4>
      <ul>
        <li>HTML</li>
        <li>CSS + SASS</li>
        <li>JavaScript</li>
        <li>ReactJS + Redux</li>
        <li>Git</li>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Premiere</li>
        <li>CorelDraw</li>
        <li>Anglický jazyk (C1)</li>
      </ul>
      <h4>Záliby:</h4>
      <p>
        Ve volných chvílích se ze všeho nejraději učím novým dovednostem, objevuji novou{' '}
        <a
          href='https://open.spotify.com/user/thesoltaire?si=07f4569bd58e4c11'
          target='_blank'
          rel='noreferrer'
        >
          hudbu
        </a>{' '}
        a občas jsem také vtipný na internetu prostřednictvím tvorby tzv. memů
      </p>
    </section>
  )
}

export default memo(AboutMe)
