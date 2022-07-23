import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomeLayout } from 'components/templates/HomeLayout'
import { HomePage } from 'components/pages/HomePage'
import { MainLayout } from 'components/templates/MainLayout'
import { UsersPage } from 'components/pages/UsersPage'
import { SettingsPage } from 'components/pages/SettingsPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
