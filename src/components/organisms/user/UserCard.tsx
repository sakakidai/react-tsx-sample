import { memo } from 'react'
import { styled } from '@mui/material/styles'

import { UserType } from 'types/user'

import { Card } from 'components/atoms/card/Card'
import { UserIconWithName } from 'components/molecules/user/UserIconWithName'

type Props = {
  user: UserType
}

export const UserCard = memo((props: Props) => {
  const { user } = props
  return (
    <Card>
      <UserIconWithName name={user.name} image="https://source.unsplash.com/7iSl3XkJkDM" />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  )
})

const SDl = styled('dl')`
  width: 300px;
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`
