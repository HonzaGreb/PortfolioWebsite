import { useState, useRef, useEffect, useCallback, memo } from 'react'

const DesktopIcon = (props) => {
  const desktopIconRef = useRef()
  const [size, setSize] = useState(window.innerWidth)

  const updateSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [size])

  const determineScreenPosition = useCallback(() => {
    desktopIconRef.current.style.left = null
    desktopIconRef.current.style.top = null
    const determinedPosition = parseInt(props.position) * 140
    const portraitMode = window.matchMedia('(max-height: 600px)')

    if (portraitMode.matches) {
      desktopIconRef.current.style.left = determinedPosition + 'px'
    } else {
      desktopIconRef.current.style.top = determinedPosition + 'px'
    }
  }, [props.position])

  useEffect(() => {
    determineScreenPosition()
  }, [size, determineScreenPosition])

  const clickHandler = () => {
    props.onClick(props.id)
  }

  const doubleClickHandler = () => props.onDoubleClick(props.id)

  return (
    <div
      className='desktop-icon-container'
      id={props.id}
      ref={desktopIconRef}
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onTouchStart={doubleClickHandler}
    >
      <span>{props.icon}</span>
      <p>{props.id}</p>
    </div>
  )
}

export default memo(DesktopIcon)
