import useIcon from '../../../Hooks/useIcon'

import twitter_minimalism from '../../../img/MinimalismTheme/Socials/twitter_minimalism.png'
import twitter_dark from '../../../img/DarkTheme/Socials/twitter_dark.png'
import twitter_memozrnnost from '../../../img/MemozrnnostTheme/Socials/twitter_memozrnnost.png'
import twitter_classic from '../../../img/ClassicTheme/Socials/twitter_classic.png'

const TwitterIcon = (props) => {
  const currentTwitterIcon = useIcon(
    twitter_minimalism,
    twitter_dark,
    twitter_memozrnnost,
    twitter_classic
  )

  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      <img
        className='socials-icon'
        src={currentTwitterIcon}
        alt='twitter-icon'
      />
    </a>
  )
}

export default TwitterIcon
