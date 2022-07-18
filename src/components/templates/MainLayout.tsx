import { Outlet } from 'react-router-dom'

import { MainWrapper } from 'components/atoms/layout/MainWrapper'
import { Header } from 'components/atoms/layout/Header'
import { Footer } from 'components/atoms/layout/Footer'
import { Wrapper } from 'components/atoms/layout/Wrapper'

export const MainLayout = () => {
  return (
    <MainWrapper>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </MainWrapper>
  )
}
