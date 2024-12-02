import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;

  button {
    cursor: pointer;
    padding-top: 0.25rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0 8rem;
    margin-bottom: 3rem;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`