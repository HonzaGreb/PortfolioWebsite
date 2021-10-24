import { memo } from 'react'
import useTime from '../../Hooks/useTime'

const Time = () => {
  const time = useTime()
  return <div className='time'>{time}</div>
}

export default memo(Time)
