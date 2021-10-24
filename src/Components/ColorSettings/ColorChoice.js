import { useContext, useState, useEffect } from 'react'
import { ColorContext } from '../../Store/Context'

const ColorChoice = (props) => {
  const colorCtx = useContext(ColorContext)
  const [selected, setSelected] = useState(false)

  const { colorTheme, changeColorTheme } = colorCtx

  const colorChoiceHandler = () => {
    changeColorTheme(props.theme)

    setSelected(true)
  }

  useEffect(() => {
    if (colorTheme === props.theme) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [colorTheme, props.theme])

  return (
    <div className={`color-ch-container ${props.theme}`}>
      <span>{props.theme}</span>
      <div className='color-ch-colors'>
        <span className='primary'></span>
        <span className='secondary'></span>
        <span className='border'></span>
        <span className='text'></span>
      </div>
      <button className='color-ch-button' onClick={colorChoiceHandler}>
        Zvolit barevné schéma
      </button>
      {selected && <p>Zvoleno ✓</p>}
    </div>
  )
}

export default ColorChoice
