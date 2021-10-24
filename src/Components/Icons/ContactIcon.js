import { memo } from 'react'

import useIcon from '../../Hooks/useIcon'

import contact_minimalism from '../../img/MinimalismTheme/contact_minimalism.png'
import contact_dark from '../../img/DarkTheme/contact_dark.png'
import contact_memozrnnost from '../../img/MemozrnnostTheme/contact_memozrnnost.png'
import contact_classic from '../../img/ClassicTheme/contact_classic.png'

const ContactIcon = () => {
  const currentContactIcon = useIcon(
    contact_minimalism,
    contact_dark,
    contact_memozrnnost,
    contact_classic
  )

  return <img className='desktop-icon' src={currentContactIcon} alt='contact-icon'></img>
}

export default memo(ContactIcon)
