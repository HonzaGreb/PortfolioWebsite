import { Fragment, useContext } from 'react'
import { WindowContext } from '../../Store/Context'

const MinimizedWindow = (props) => {
  const windowCtx = useContext(WindowContext)

  const maximizeWindowHandler = () => {
    windowCtx.maximizeWindow(props.id)
    windowCtx.focusWindow(props.id)
  }

  return (
    <Fragment>
      <li className={'minimized-window'} onClick={maximizeWindowHandler}>
        {props.id}
      </li>
    </Fragment>
  )
}

export default MinimizedWindow
