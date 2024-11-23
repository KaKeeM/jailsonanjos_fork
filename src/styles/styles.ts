import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  text-align: center;
  background-image: url('src/assets/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-size: 100% 100%;
  padding-right: 2rem;
  padding-left: 3.5rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 3rem;
  }
`

export const Heading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    padding-top: 4rem;
  }

  span {
    font-size: 3rem;
    color: ${(props) => props.theme['blue']};
    @media screen and (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
`
export const Heading2 = styled.h2``

export const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100vw;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 3rem;
    padding: 2.5rem;
  }
`

export const HeadingAndData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
