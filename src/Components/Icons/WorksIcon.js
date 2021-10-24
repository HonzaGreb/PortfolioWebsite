import { memo } from 'react'

import useIcon from '../../Hooks/useIcon'

import works_minimalism from '../../img/MinimalismTheme/works_minimalism.png'
import works_dark from '../../img/DarkTheme/works_dark.png'
import works_memozrnnost from '../../img/MemozrnnostTheme/works_memozrnnost.png'
import works_classic from '../../img/ClassicTheme/works_classic.png'

const WorksIcon = () => {
  const currentWorksIcon = useIcon(works_minimalism, works_dark, works_memozrnnost, works_classic)

  return <img className='desktop-icon' src={currentWorksIcon} alt='works-icon'></img>
}

export default memo(WorksIcon)
