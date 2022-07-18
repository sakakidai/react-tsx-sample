import { styled } from '@mui/material/styles'

import { Container } from '@mui/material'
import { SeachInput } from 'components/molecules/SerchInput'
import { UserCard } from 'components/organisms/user/UserCard'

const users = [...(Array(10).keys() as any)].map((val) => {
  return {
    id: val,
    name: `さかき-${val}`,
    email: 'sakakiddddddddddd@example.com',
    phone: '090-1111-2222',
    image: 'https://source.unsplash.com/7iSl3XkJkDM',
    website: 'https://google.com',
    company: {
      name: '株式会社サムブーク',
    },
  }
})

export const UsersPage = () => {
  return (
    <Container>
      <SeachInput />
      <UserCard user={users[0]} />
    </Container>
  )
}
