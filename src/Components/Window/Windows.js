import { useContext, Fragment } from 'react'
import { WindowContext } from '../../Store/Context'
import MovableWindow from './MovableWindow'
import Contact from './WindowContent/Contact'
import AboutMe from './WindowContent/AboutMe'
import Game from './WindowContent/Game'
import Works from './WindowContent/Works'
import ColorSettings from '../ColorSettings/ColorSettings'

import { WORKS, ABOUT_ME, GAME, CONTACT, SETTINGS } from '../../Store/Context'

const Windows = () => {
  const windowCtx = useContext(WindowContext)

  const selectWindowContent = (openWindowId) => {
    switch (openWindowId) {
      case ABOUT_ME:
        return <AboutMe />
      case WORKS:
        return <Works />
      case GAME:
        return <Game />
      case CONTACT:
        return <Contact />
      case SETTINGS:
        return <ColorSettings />
      default:
        return
    }
  }

  const focusHandler = (id) => {
    windowCtx.focusWindow(id)
  }

  const openWindows = windowCtx.openWindows.map((openWindowId) => {
    return (
      <MovableWindow
        id={openWindowId}
        key={openWindowId}
        size={openWindowId === WORKS ? 'bigger' : null}
        onClick={focusHandler}
      >
        {selectWindowContent(openWindowId)}
      </MovableWindow>
    )
  })

  return <Fragment>{openWindows}</Fragment>
}

export default Windows
