import { useReducer } from 'react'
import { StartContext } from './Context'

const OPEN_START = 'OPEN_START'
const CLOSE_START = 'CLOSE_START'

// Start context

const defaultStartContextValue = { startIsOpen: false }

const startReducer = (state, action) => {
  switch (action.type) {
    case OPEN_START: {
      return { startIsOpen: true }
    }
    case CLOSE_START: {
      return { startIsOpen: false }
    }
    default:
      return { ...state }
  }
}

// Context Provider Component

const StartContextProvider = (props) => {
  const [startState, dispatchStartAction] = useReducer(startReducer, defaultStartContextValue)

  const openStartHandler = () => {
    dispatchStartAction({ type: OPEN_START })
  }

  const closeStartHandler = () => {
    dispatchStartAction({ type: CLOSE_START })
  }

  const startContextValue = {
    startIsOpen: startState.startIsOpen,
    openStart: openStartHandler,
    closeStart: closeStartHandler,
  }

  return <StartContext.Provider value={startContextValue}>{props.children}</StartContext.Provider>
}

export default StartContextProvider
