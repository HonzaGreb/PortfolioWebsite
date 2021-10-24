import useIcon from '../../../Hooks/useIcon'

import linkedin_minimalism from '../../../img/MinimalismTheme/Socials/linkedin_minimalism.png'
import linkedin_dark from '../../../img/DarkTheme/Socials/linkedin_dark.png'
import linkedin_memozrnnost from '../../../img/MemozrnnostTheme/Socials/linkedin_memozrnnost.png'
import linkedin_classic from '../../../img/ClassicTheme/Socials/linkedin_classic.png'

const LinkedInIcon = (props) => {
  const currentLinkedInIcon = useIcon(
    linkedin_minimalism,
    linkedin_dark,
    linkedin_memozrnnost,
    linkedin_classic
  )

  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      <img
        className='socials-icon'
        src={currentLinkedInIcon}
        alt='linkedin-icon'
      />
    </a>
  )
}

export default LinkedInIcon
