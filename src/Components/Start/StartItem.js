import { WindowContext } from '../../Store/Context'
import { useContext } from 'react'

const StartItem = (props) => {
  const windowCtx = useContext(WindowContext)

  const itemSelectHandler = () => {
    windowCtx.openWindow(props.id)
  }

  return (
    <li className='start-item' onClick={itemSelectHandler}>
      <span className='start-icon'>{props.icon}</span>
      <p>{props.id}</p>
    </li>
  )
}

export default StartItem
