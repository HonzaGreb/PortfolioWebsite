import { useState } from 'react'
import { ColorContext } from './Context'

import { CLASSIC } from './Context'

const ColorContextProvider = (props) => {
  const storedColor = sessionStorage.getItem('colorTheme')
  const [colorTheme, setColorTheme] = useState(storedColor || CLASSIC)

  const changeColorThemeHandler = (colorId) => {
    sessionStorage.setItem('colorTheme', colorId)
    setColorTheme(colorId)
  }

  const colorContextValue = {
    colorTheme: colorTheme,
    changeColorTheme: changeColorThemeHandler,
  }

  return <ColorContext.Provider value={colorContextValue}>{props.children}</ColorContext.Provider>
}

export default ColorContextProvider
