import { useTranslation } from 'react-i18next'
import { ProjectsContainer } from './styles'


export function Projects() {

  const { t } = useTranslation()
  return (
    <>
      <ProjectsContainer>
        <h4>
          <a href={'https://whatsnextweb.fly.dev/'} target={'_blank'}>
            WhatsNext?
          </a>
        </h4>
        <p>{t("projects.description.whatsnextweb")}</p>
      </ProjectsContainer>
      <ProjectsContainer>
        <h4>
          <a href={'flutter-project-proud-paper-3157.fly.dev'} target={'_blank'}>
            WhatsNext? - Mobile & Desktop
          </a>
        </h4>
        <p>{t("projects.description.whatsnextmobile")}</p>
      </ProjectsContainer>
      
    </>
  )
}
