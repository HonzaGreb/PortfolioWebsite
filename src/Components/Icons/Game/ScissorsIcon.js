import { memo } from 'react'

import useIcon from '../../../Hooks/useIcon'

import scissors_minimalism from '../../../img/MinimalismTheme/Game/scissors_minimalism.png'
import scissors_dark from '../../../img/DarkTheme/Game/scissors_dark.png'
import scissors_classic from '../../../img/ClassicTheme/Game/scissors_classic.png'
import scissors_memozrnnost from '../../../img/MemozrnnostTheme/Game/scissors_memozrnnost.png'

const ScissorsIcon = () => {
  const currentScissorsIcon = useIcon(
    scissors_minimalism,
    scissors_dark,
    scissors_memozrnnost,
    scissors_classic
  )

  return (
    <img
      className='game-icon'
      draggable='false'
      alt='scissors-icon'
      src={currentScissorsIcon}
    ></img>
  )
}

export default memo(ScissorsIcon)
