import { styled } from '@mui/material/styles'

import { Container, Grid } from '@mui/material'
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
    <SContainer>
      <Grid container spacing={2}>
        <SCotentCenterGrid item xs={12}>
          <SeachInput />
        </SCotentCenterGrid>
        {users.map((user) => {
          return (
            <SCotentCenterGrid key={user.id} item xs={12} sm={6} md={4}>
              <UserCard user={user} />
            </SCotentCenterGrid>
          )
        })}
      </Grid>
    </SContainer>
  )
}

const SContainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`

const SCotentCenterGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`
