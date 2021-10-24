import { useContext, useState, useEffect } from 'react'
import { ColorContext } from '../Store/Context'
import { MINIMALISM, DARK, MEMOZRNNOST, CLASSIC } from '../Store/Context'

const useIcon = (minimalismIcon, darkIcon, memozrnnostIcon, classicIcon) => {
  const colorCtx = useContext(ColorContext)
  const [currentIcon, setCurrentIcon] = useState(null)

  useEffect(() => {
    switch (colorCtx.colorTheme) {
      case MINIMALISM:
        setCurrentIcon(minimalismIcon)
        break
      case DARK:
        setCurrentIcon(darkIcon)
        break
      case MEMOZRNNOST:
        setCurrentIcon(memozrnnostIcon)
        break
      case CLASSIC:
        setCurrentIcon(classicIcon)
        break
      default:
        return
    }
  }, [
    colorCtx.colorTheme,
    minimalismIcon,
    darkIcon,
    memozrnnostIcon,
    classicIcon,
  ])

  return currentIcon
}

export default useIcon
