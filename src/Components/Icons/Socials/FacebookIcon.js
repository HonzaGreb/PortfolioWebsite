import useIcon from '../../../Hooks/useIcon'

import facebook_minimalism from '../../../img/MinimalismTheme/Socials/facebook_minimalism.png'
import facebook_dark from '../../../img/DarkTheme/Socials/facebook_dark.png'
import facebook_memozrnnost from '../../../img/MemozrnnostTheme/Socials/facebook_memozrnnost.png'
import facebook_classic from '../../../img/ClassicTheme/Socials/facebook_classic.png'

const FacebookIcon = (props) => {
  const currentFacebookIcon = useIcon(
    facebook_minimalism,
    facebook_dark,
    facebook_memozrnnost,
    facebook_classic
  )

  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      <img
        className='socials-icon'
        src={currentFacebookIcon}
        alt='facebook-icon'
      />
    </a>
  )
}

export default FacebookIcon
