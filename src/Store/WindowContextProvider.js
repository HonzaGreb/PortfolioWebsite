import { useReducer } from 'react'
import { WindowContext } from './Context'

const OPEN_WINDOW = 'OPEN_WINDOW'
const CLOSE_WINDOW = 'CLOSE_WINDOW'
const MINIMIZE_WINDOW = 'MINIMIZE_WINDOW'
const MAXIMIZE_WINDOW = 'MAXIMIZE_WINDOW'
const FOCUS_WINDOW = 'FOCUS_WINDOW'

// Window context

const defaultWindowContextValue = { openWindows: [], minimizedWindows: [] }

const windowReducer = (state, action) => {
  switch (action.type) {
    case OPEN_WINDOW: {
      if (
        state.openWindows.includes(action.payload) ||
        state.minimizedWindows.includes(action.payload)
      ) {
        return { ...state }
      } else {
        return {
          openWindows: [...state.openWindows, action.payload],
          minimizedWindows: [...state.minimizedWindows, action.payload],
        }
      }
    }

    case CLOSE_WINDOW: {
      if (state.openWindows.length === 1 && state.minimizedWindows.length === 1) {
        return { openWindows: [], minimizedWindows: [] }
      } else {
        const updatedOpenWindows = state.openWindows.filter((window) => {
          return window !== action.payload
        })
        const updatedMinimizedWindows = state.minimizedWindows.filter((window) => {
          return window !== action.payload
        })
        return {
          openWindows: updatedOpenWindows,
          minimizedWindows: updatedMinimizedWindows,
        }
      }
    }

    case MINIMIZE_WINDOW: {
      const updatedOpenWindows = state.openWindows.filter((window) => {
        return window !== action.payload
      })
      return {
        minimizedWindows: [...state.minimizedWindows],
        openWindows: updatedOpenWindows,
      }
    }

    case MAXIMIZE_WINDOW: {
      if (state.openWindows.includes(action.payload)) {
        return { ...state }
      } else {
        const maximizedWindowIndex = state.minimizedWindows.findIndex(
          (miniWindow) => miniWindow === action.payload
        )

        const maximizedWindow = state.minimizedWindows[maximizedWindowIndex]

        return {
          ...state,
          openWindows: [...state.openWindows, maximizedWindow],
        }
      }
    }

    case FOCUS_WINDOW:
      {
        const openWindows = document.querySelectorAll('.movable-window')
        openWindows.forEach((openWindow) => {
          if (openWindow.id !== action.payload) {
            openWindow.classList.remove('focused')
          } else {
            openWindow.classList.add('focused')
          }
        })
      }
      return { ...state }
    default: {
      return { ...state }
    }
  }
}

// Context Provider Component

const WindowContextProvider = (props) => {
  const [windowState, dispatchWindowAction] = useReducer(windowReducer, defaultWindowContextValue)

  const openWindowHandler = (windowId) => {
    dispatchWindowAction({ type: OPEN_WINDOW, payload: windowId })
  }

  const closeWindowHandler = (windowId) => {
    dispatchWindowAction({ type: CLOSE_WINDOW, payload: windowId })
  }

  const minimizeWindowHandler = (windowId) => {
    dispatchWindowAction({ type: MINIMIZE_WINDOW, payload: windowId })
  }

  const maximizeWindowHandler = (windowId) => {
    dispatchWindowAction({ type: MAXIMIZE_WINDOW, payload: windowId })
  }

  const focusWindowHandler = (windowId) => {
    dispatchWindowAction({ type: FOCUS_WINDOW, payload: windowId })
  }

  const windowContextValue = {
    openWindows: windowState.openWindows,
    minimizedWindows: windowState.minimizedWindows,
    openWindow: openWindowHandler,
    closeWindow: closeWindowHandler,
    minimizeWindow: minimizeWindowHandler,
    maximizeWindow: maximizeWindowHandler,
    focusWindow: focusWindowHandler,
  }

  return (
    <WindowContext.Provider value={windowContextValue}>{props.children}</WindowContext.Provider>
  )
}

export default WindowContextProvider
