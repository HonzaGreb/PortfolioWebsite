import { memo } from 'react'

import useIcon from '../../../Hooks/useIcon'

import paper_classic from '../../../img/ClassicTheme/Game/paper_classic.png'
import paper_memozrnnost from '../../../img/MemozrnnostTheme/Game/paper_memozrnnost.png'
import paper_minimalism from '../../../img/MinimalismTheme/Game/paper_minimalism.png'
import paper_dark from '../../../img/DarkTheme/Game/paper_dark.png'

const PaperIcon = () => {
  const currentPaperIcon = useIcon(paper_minimalism, paper_dark, paper_memozrnnost, paper_classic)

  return <img className='game-icon' draggable='false' alt='paper-icon' src={currentPaperIcon}></img>
}

export default memo(PaperIcon)
