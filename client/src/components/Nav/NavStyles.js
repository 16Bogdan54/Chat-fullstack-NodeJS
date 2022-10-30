import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  background: #8F8CC2;
`

export const LiItem = styled.li`
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;

  svg {
    width: 2em;
    height: 2em;
    color: #e3e3e3;
    transition: color .3s ease;
    &:hover{
      color: #D295BF;
    }
  }
`

export const List = styled.ul`
  list-style-type: none;
  display: flex;
`