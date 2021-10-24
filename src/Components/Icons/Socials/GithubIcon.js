import useIcon from '../../../Hooks/useIcon'

import github_minimalism from '../../../img/MinimalismTheme/Socials/github_minimalism.png'
import github_dark from '../../../img/DarkTheme/Socials/github_dark.png'
import github_memozrnnost from '../../../img/MemozrnnostTheme/Socials/github_memozrnnost.png'
import github_classic from '../../../img/ClassicTheme/Socials/github_classic.png'

const GithubIcon = (props) => {
  const currentGithubIcon = useIcon(
    github_minimalism,
    github_dark,
    github_memozrnnost,
    github_classic
  )

  return (
    <a href={props.href} target='_blank' rel='noreferrer'>
      <img className='socials-icon' src={currentGithubIcon} alt='github-icon' />
    </a>
  )
}

export default GithubIcon
