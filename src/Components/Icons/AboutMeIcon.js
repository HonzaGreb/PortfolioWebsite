import { memo } from 'react'

import useIcon from '../../Hooks/useIcon'

import about_me_minimalism from '../../img/MinimalismTheme/about_me_minimalism.png'
import about_me_dark from '../../img/DarkTheme/about_me_dark.png'
import about_me_memozrnnost from '../../img/MemozrnnostTheme/about_me_memozrnnost.png'
import about_me_classic from '../../img/ClassicTheme/about_me_classic.png'

const AboutMeIcon = () => {
  const currentAboutMeIcon = useIcon(
    about_me_minimalism,
    about_me_dark,
    about_me_memozrnnost,
    about_me_classic
  )

  return <img className='desktop-icon' src={currentAboutMeIcon} alt='about-me-icon'></img>
}

export default memo(AboutMeIcon)
