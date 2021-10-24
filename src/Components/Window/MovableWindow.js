import { useContext, useRef } from 'react'
import { WindowContext } from '../../Store/Context'

const MovableWindow = (props) => {
  const windowCtx = useContext(WindowContext)
  const movableWindowRef = useRef()

  const dragHandler = (e) => {
    var rect = movableWindowRef.current.getBoundingClientRect()
    let x
    let y

    if (e.type === 'touchstart') {
      x = e.touches[0].pageX - rect.left
      y = e.touches[0].pageY - rect.top
    } else {
      x = e.pageX - rect.left
      y = e.pageY - rect.top
    }

    const drag = (e) => {
      if (e.type === 'touchmove') {
        movableWindowRef.current.style.left = e.touches[0].pageX - x + 'px'
        movableWindowRef.current.style.top = e.touches[0].pageY - y + 'px'
      } else {
        movableWindowRef.current.style.left = e.pageX - x + 'px'
        movableWindowRef.current.style.top = e.pageY - y + 'px'
      }
    }

    const drop = () => {
      document.removeEventListener('mouseup', drop)
      document.removeEventListener('touchend', drop)
      document.removeEventListener('mousemove', drag)
      document.removeEventListener('touchmove', drag)
    }

    document.addEventListener('mouseup', drop)
    document.addEventListener('touchend', drop)
    document.addEventListener('mousemove', drag)
    document.addEventListener('touchmove', drag)
  }

  const minimizeHandler = () => {
    windowCtx.minimizeWindow(props.id)
  }

  const closeHandler = () => {
    windowCtx.closeWindow(props.id)
  }

  const focusHandler = () => {
    props.onClick(props.id)
  }

  const movableWindowStyles = props.size === 'bigger' ? 'movable-window bigger' : 'movable-window'

  return (
    <div
      ref={movableWindowRef}
      className={movableWindowStyles}
      onClick={focusHandler}
      id={props.id}
    >
      <header onMouseDown={dragHandler} onTouchStart={dragHandler}>
        <h4>{props.id}</h4>
        <div className='btn-container'>
          <button className='btn-minimize' onClick={minimizeHandler}>
            _
          </button>
          <button className='btn-close' onClick={closeHandler}>
            X
          </button>
        </div>
      </header>
      <section className='content'>{props.children}</section>
    </div>
  )
}

export default MovableWindow
