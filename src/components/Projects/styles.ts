import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  line-height: 1.6;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 3rem;
  }

  @media screen and (max-width: 767px) {
    margin: 1rem;
  }

  h2 {
    @media screen and (min-width: 768px) {
      padding: 1rem;
    }
  }

  h4 {
    font-family: 'Cinzel', serif;
  }

  a {
    color: ${(props) => props.theme['gray-100']};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme['blue']};
    }
  }
`
