import './i18n'

import { useTranslation } from 'react-i18next'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.png'
import {
  AppContainer,
  Heading,
  Heading2,
  HeadingAndData,
  IdContainer,
} from './styles/styles'

import { Projects } from './components/Projects'
import { ProjectsContainer } from './components/Projects/styles'
import { ArticlesContainer } from './components/Article/styles'
import { Article } from './components/Article'
import { SocialMediaLinks } from './components/SocialMediaLinks'
import { Skills } from './components/Skills'

import { projects, articles } from './data'
import background from './assets/image.jpg'


function App() {
  const {t} = useTranslation()

  return (
    <div>
 
      <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Header />
          <AppContainer className="App">
            <IdContainer>
              <Avatar size={'large'} src={coolAvatar} />
              <HeadingAndData>
                <Heading>
                  {t("heading.title")} <span>{t('heading.name')}</span>
                </Heading>
                <h3>{t("heading.occupation")}</h3>
                <Skills />
                <SocialMediaLinks />
              </HeadingAndData>
              
            </IdContainer>
            <div className='bottom'>
              <ProjectsContainer>
                <Heading2 id="projects">{t("section.projects")}</Heading2>
              <Projects />
              </ProjectsContainer>
              <ArticlesContainer>
                <Heading2 id="articles">{t("section.articles")}</Heading2>
                  {articles.map((article) => {
                    const { href, title } = article
                      return (
                        <Article
                          key={title}
                          href={href}
                          title={title}
                        />
                      )
                  })}
              </ArticlesContainer>
          </div>
          </AppContainer>
        </ThemeProvider>
    </div>
    
   
    
  )
}

export default App
