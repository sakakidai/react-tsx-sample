import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import { MainWrapper } from 'components/atoms/layout/MainWrapper'
import { Header } from 'components/atoms/layout/Header'
import { Container } from '@mui/material'

export const HomeLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <SContainer>
        <Outlet />
      </SContainer>
    </MainWrapper>
  )
}

const SContainer = styled(Container)`
  background-color: #fdf5f5;
  height: 100%;
`
