import { memo } from 'react'

import useIcon from '../../Hooks/useIcon'

import settings_minimalism from '../../img/MinimalismTheme/settings_minimalism.png'
import settings_dark from '../../img/DarkTheme/settings_dark.png'
import settings_memozrnnost from '../../img/MemozrnnostTheme/settings_memozrnnost.png'
import settings_classic from '../../img/ClassicTheme/settings_classic.png'

const SettingsIcon = () => {
  const currentSettingsIcon = useIcon(
    settings_minimalism,
    settings_dark,
    settings_memozrnnost,
    settings_classic
  )

  return <img className='desktop-icon' src={currentSettingsIcon} alt='settings-icon'></img>
}

export default memo(SettingsIcon)
