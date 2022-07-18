import { Outlet } from 'react-router-dom'

import { MainWrapper } from 'components/atoms/layout/MainWrapper'
import { Header } from 'components/atoms/layout/Header'
import { Wrapper } from 'components/atoms/layout/Wrapper'

export const HomeLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </MainWrapper>
  )
}
