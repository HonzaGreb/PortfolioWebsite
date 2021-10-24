import { Fragment, useContext, useEffect, useCallback } from 'react'
import { ABOUT_ME, WORKS, CONTACT } from '../../Store/Context'
import { WindowContext } from '../../Store/Context'
import WorksIcon from '../Icons/WorksIcon'
import ContactIcon from '../Icons/ContactIcon'
import AboutMeIcon from '../Icons/AboutMeIcon'
import DesktopIcon from './DesktopIcon'

const desktopIconsData = [
  { id: ABOUT_ME, position: 1, icon: <AboutMeIcon /> },
  { id: WORKS, position: 2, icon: <WorksIcon /> },
  { id: CONTACT, position: 3, icon: <ContactIcon /> },
]

const DesktopIcons = () => {
  const windowCtx = useContext(WindowContext)

  // přímá interakce s DOMem není ideální, might rework later

  const clickHandler = (id) => {
    const desktopIcons = document.querySelectorAll('.desktop-icon-container')
    desktopIcons.forEach((icon) => {
      if (icon.id !== id) {
        icon.classList.remove('highlighted')
      } else {
        icon.classList.add('highlighted')
      }
    })
  }

  const unhighlightAll = () => {
    const desktopIcons = document.querySelectorAll('.desktop-icon-container')
    desktopIcons.forEach((icon) => icon.classList.remove('highlighted'))
  }

  const doubleClickHandler = (id) => {
    unhighlightAll()
    windowCtx.openWindow(id)
  }

  // Unhighlights if clicked elsewhere

  const clickElsewhereHandler = useCallback((e) => {
    const closestDiv = e.target.closest('div')
    if (!closestDiv || !closestDiv.classList.contains('desktop-icon-container')) {
      unhighlightAll()
    } else {
      return
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', clickElsewhereHandler)
    return () => document.removeEventListener('click', clickElsewhereHandler)
  }, [clickElsewhereHandler])

  const mappedDesktopIcons = desktopIconsData.map((item) => {
    return (
      <DesktopIcon
        id={item.id}
        key={item.id}
        position={item.position}
        icon={item.icon}
        onClick={clickHandler}
        onDoubleClick={doubleClickHandler}
      />
    )
  })

  return <Fragment>{mappedDesktopIcons}</Fragment>
}

export default DesktopIcons
