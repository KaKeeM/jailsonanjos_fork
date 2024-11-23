import {
  MobileSocialMediaContainer,
  DesktopSocialMediaContainer,
} from './styles'
import { GithubLogo, LinkedinLogo, Envelope } from 'phosphor-react'
import { DevLogo } from '../../components/DevLogo'

type SocialMediaLinksType = {
  isLargeScreen?: boolean
}

export function SocialMediaLinks({ isLargeScreen }: SocialMediaLinksType) {
  const SocialMediaContainer = isLargeScreen
    ? DesktopSocialMediaContainer
    : MobileSocialMediaContainer

  return (
    <SocialMediaContainer>
      <a href="https://www.linkedin.com/in/julia-amorim-web-dev/" target={'_blank'}>
        <LinkedinLogo size={32} color={'#00818A'} />
      </a>
      <a href="https://github.com/KaKeeM" target={'_blank'}>
        <GithubLogo size={32} color={'#00818A'} />
      </a>
      
      <a href="mailto:juliaamorim7876@gmail.com?subject=Oportunidade">
        <Envelope size={32} color={'#00818A'} />
      </a>
    </SocialMediaContainer>
  )
}
