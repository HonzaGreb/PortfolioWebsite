import { Fragment, useEffect, useContext, memo, useRef, useCallback } from 'react'
import { StartContext, WindowContext } from '../../Store/Context'
import Start from '../Start/Start'
import Time from './Time'
import MinimizedWindow from './MinimizedWindow'

const Taskbar = () => {
  const startCtx = useContext(StartContext)
  const windowCtx = useContext(WindowContext)
  const btnRef = useRef()
  const { startIsOpen, openStart, closeStart } = startCtx

  const openStartHandler = useCallback(() => openStart(), [openStart])
  const closeStartHandler = useCallback(() => closeStart(), [closeStart])

  const startBtnHandler = () => {
    if (startIsOpen) {
      closeStartHandler()
    } else {
      openStartHandler()
    }
  }

  // closes start window if clicked elsewhere
  const clickElsewhereHandler = useCallback(
    (e) => {
      if (e.target.id !== 'start-btn') {
        closeStartHandler()
      }
    },
    [closeStartHandler]
  )

  useEffect(() => {
    document.addEventListener('click', clickElsewhereHandler)

    return () => {
      document.removeEventListener('click', clickElsewhereHandler)
    }
  }, [clickElsewhereHandler])

  const minimizedWindows = windowCtx.minimizedWindows.map((minimizedWindowId) => {
    return <MinimizedWindow id={minimizedWindowId} key={minimizedWindowId} />
  })

  return (
    <Fragment>
      {startIsOpen && <Start />}
      <footer className={'taskbar'}>
        <div className={'taskbar-left'}>
          <button id='start-btn' onClick={startBtnHandler} className={'start-btn'} ref={btnRef}>
            Start
          </button>
          <ul>{minimizedWindows}</ul>
        </div>
        <Time />
      </footer>
    </Fragment>
  )
}

export default memo(Taskbar)
