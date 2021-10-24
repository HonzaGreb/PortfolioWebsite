import { memo } from 'react'

import useIcon from '../../Hooks/useIcon'

import game_minimalism from '../../img/MinimalismTheme/game_minimalism.png'
import game_dark from '../../img/DarkTheme/game_dark.png'
import game_memozrnnost from '../../img/MemozrnnostTheme/game_memozrnnost.png'
import game_classic from '../../img/ClassicTheme/game_classic.png'

const GameIcon = () => {
  const currentGameIcon = useIcon(game_minimalism, game_dark, game_memozrnnost, game_classic)

  return <img className='desktop-icon' src={currentGameIcon} alt='game-icon'></img>
}

export default memo(GameIcon)
