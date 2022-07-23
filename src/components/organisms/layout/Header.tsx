import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, IconButton, Box } from '@mui/material'
import { MenuIconButton } from 'components/atoms/button/MenuIconButton'
import { MenuDrawer } from 'components/molecules/MenuDrawer'

export const Header = () => {
  const navigate = useNavigate()
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const toggleDrawer = (openState: boolean) => {
    setIsOpenDrawer(openState)
  }

  const onClickHome = useCallback(() => {
    navigate('/')
  }, [])

  const onClickUsers = useCallback(() => {
    navigate('/users')
  }, [])

  const onClickSettings = useCallback(() => {
    navigate('/settings')
  }, [])

  return (
    <>
      <SAppBar position="static">
        <Toolbar>
          <SBrandName onClick={onClickHome}>React-tsx</SBrandName>
          <SLinkList>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <SLink onClick={onClickUsers}>ユーザー一覧</SLink>
            </Box>
            <Box display={{ xs: 'none', sm: 'block' }}>
              <SLink onClick={onClickSettings}>設定</SLink>
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
              <MenuIconButton onOpen={() => toggleDrawer(true)} />
            </Box>
          </SLinkList>
        </Toolbar>
      </SAppBar>
      <MenuDrawer
        isOpenDrawer={isOpenDrawer}
        onClose={() => toggleDrawer(false)}
        onClickHome={onClickHome}
        onClickUsers={onClickUsers}
        onClickSettings={onClickSettings}
      />
    </>
  )
}

const SAppBar = styled(AppBar)`
  color: white;
  cursor: pointer;
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

const SLink = styled('li')`
  margin: 0 16px;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    transition: color 0.5s;
  }
`

const SIconButton = styled(IconButton)``
