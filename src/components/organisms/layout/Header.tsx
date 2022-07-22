import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, IconButton, Box } from '@mui/material'
import { MenuIconButton } from 'components/atoms/button/MenuIconButton'
import { MenuDrawer } from 'components/molecules/MenuDrawer'

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const toggleDrawer = (openState: boolean) => {
    setIsOpenDrawer(openState)
  }

  return (
    <>
      <SAppBar position="static">
        <Toolbar>
          <SBrandName>React-tsx</SBrandName>
          <SLinkList>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <SLinkWrapper>
                <SLink to="/">HOME</SLink>
              </SLinkWrapper>
            </Box>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <SLinkWrapper>
                <SLink to="/users">USERS</SLink>
              </SLinkWrapper>
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
              <MenuIconButton onOpen={() => toggleDrawer(true)} />
            </Box>
          </SLinkList>
        </Toolbar>
      </SAppBar>
      <MenuDrawer isOpenDrawer={isOpenDrawer} onClose={() => toggleDrawer(false)} />
    </>
  )
}

const SAppBar = styled(AppBar)`
  color: white;
`

const SBrandName = styled('div')`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`

const SLinkList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
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

const SIconButton = styled(IconButton)``
