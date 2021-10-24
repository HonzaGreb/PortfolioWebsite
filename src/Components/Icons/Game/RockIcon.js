import { memo } from 'react'

import useIcon from '../../../Hooks/useIcon'

import rock_minimalism from '../../../img/MinimalismTheme/Game/rock_minimalism.png'
import rock_dark from '../../../img/DarkTheme/Game/rock_dark.png'
import rock_memozrnnost from '../../../img/MemozrnnostTheme/Game/rock_memozrnnost.png'
import rock_classic from '../../../img/ClassicTheme/Game/rock_classic.png'

const RockIcon = () => {
  const currentRockIcon = useIcon(rock_minimalism, rock_dark, rock_memozrnnost, rock_classic)

  return <img className='game-icon' draggable='false' alt='rock-icon' src={currentRockIcon}></img>
}

export default memo(RockIcon)
