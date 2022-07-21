import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'

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
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </SLinkList>
        </Toolbar>
      </SAppBar>
      <SwipeableDrawer
        anchor="right"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        onOpen={() => setIsOpenDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsOpenDrawer(false)}
          onKeyDown={() => setIsOpenDrawer(false)}
        >
          <List>
            {['TOP', 'ユーザー一覧', '設定'].map((text) => {
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </SwipeableDrawer>
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
