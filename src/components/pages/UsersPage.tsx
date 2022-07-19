import { useEffect, memo, FC } from 'react'
import { styled } from '@mui/material/styles'

import { Container, Grid } from '@mui/material'
import { SeachInput } from 'components/molecules/SerchInput'
import { UserCard } from 'components/organisms/user/UserCard'
import { Spinner } from 'components/atoms/spinner/Spinner'

import { useAllUsers } from 'hooks/useAllUsers'

export const UsersPage: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return <Spinner />
  }

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
})

const SContainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`

const SCotentCenterGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`
