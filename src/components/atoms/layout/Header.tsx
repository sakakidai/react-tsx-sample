import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import { AppBar, Toolbar } from '@mui/material'

export const Header = () => {
  return (
    <SAppBar position="static">
      <Toolbar>
        <SBrandName>React-tsx</SBrandName>
        <SLinkList>
          <SLinkWrapper>
            <SLink to="/">HOME</SLink>
          </SLinkWrapper>
          <SLinkWrapper>
            <SLink to="/users">USERS</SLink>
          </SLinkWrapper>
        </SLinkList>
      </Toolbar>
    </SAppBar>
  )
}

const SAppBar = styled(AppBar)`
  color: white;
`

const SLinkList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
  margin-left: auto;
`

const SLinkWrapper = styled('li')`
  margin: 0 1rem;
`

const SLink = styled(Link)`
  margin: 0 8px;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    transition: color 0.5s;
  }
`

const SBrandName = styled('div')`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`
