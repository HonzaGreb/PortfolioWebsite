import StartItem from './StartItem'
import { WORKS, ABOUT_ME, GAME, CONTACT, SETTINGS } from '../../Store/Context'

import AboutMeIcon from '../Icons/AboutMeIcon'
import WorksIcon from '../Icons/WorksIcon'
import GameIcon from '../Icons/GameIcon'
import ContactIcon from '../Icons/ContactIcon'
import SettingsIcon from '../Icons/SettingsIcon'

const startData = [
  { id: ABOUT_ME, icon: <AboutMeIcon /> },
  { id: WORKS, icon: <WorksIcon /> },
  { id: GAME, icon: <GameIcon /> },
  { id: CONTACT, icon: <ContactIcon /> },
  { id: SETTINGS, icon: <SettingsIcon /> },
]

const Start = () => {
  const listContent = startData.map((dataItem) => (
    <StartItem id={dataItem.id} icon={dataItem.icon} key={dataItem.id}></StartItem>
  ))

  return (
    <section id='start' className='start-container'>
      <div className='start-left'>
        <h3>Windows 21</h3>
      </div>
      <ul>{listContent}</ul>
    </section>
  )
}

export default Start
