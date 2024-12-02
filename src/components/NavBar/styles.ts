import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: #c0ddfc;
  height: 5rem;
  width: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: absolute;
  overflow: hidden;
  right: 4rem;

`

export const MobileNavBar = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: 12rem;

  }
`
export const ListItem = styled.li`
  list-style: none;
  height: 2.5rem;
  display: flex; // Adiciona display flex
  align-items: center; // Centraliza verticalmente
  justify-content: center; // Centraliza horizontalmente

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`

export const LinkContainer = styled.a`

  color: ${(props) => props.theme['gray-900']};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme['blue']};
  }

  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme['gray-300']};
  }
`
