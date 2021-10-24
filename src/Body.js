import { useContext } from 'react'
import Taskbar from './Components/Taskbar/Taskbar'
import Windows from './Components/Window/Windows'
import DesktopIcons from './Components/DesktopIcons/DesktopIcons'
import { ColorContext } from './Store/Context'

const Body = () => {
  const colorCtx = useContext(ColorContext)

  return (
    <section className={`section ${colorCtx.colorTheme}`}>
      <DesktopIcons />
      <Windows />
      <Taskbar />
    </section>
  )
}

export default Body
