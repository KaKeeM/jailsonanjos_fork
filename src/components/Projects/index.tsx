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
          <a href={'https:://flutter-project-proud-paper-3157.fly.dev'} target={'_blank'}>
            WhatsNext? - Mobile & Desktop
          </a>
        </h4>
        <p>{t("projects.description.whatsnextmobile")}</p>
      </ProjectsContainer>
      <ProjectsContainer>
        <h4>
          <a href={'https://www.figma.com/proto/WIZPYH594u8yIX6mNTqjtq/Derretemax-Landing-Page?page-id=8%3A2&node-id=15-152&node-type=canvas&viewport=3705%2C58%2C0.37&t=kINOhGL9ztYhLAY7-1&scaling=contain&content-scaling=fixed'} target={'_blank'}>
            Shopify Landing Page Prototype
          </a>
        </h4>
        <p>{t("projects.description.shopify")}</p>
      </ProjectsContainer>
      
    </>
  )
}
