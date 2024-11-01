import { useTranslation } from 'react-i18next'
import { SkillsContainer } from './styles'

export function Skills() {
  const {t} = useTranslation()

  return (
    <SkillsContainer>
      <p>
        {t('skills.backend')} <span>Flutter, PowerBi Visuals, MySQL, TypeScript, NodeJS, Git & Data Python Libs like NumPy, Matplotlib, Pandas.</span>
      </p>  
      <p>  
        {t('skills.studying')} <span>ReactJS, Styled-Components, Router-dom.</span>
      </p>
    </SkillsContainer>
  )
}
