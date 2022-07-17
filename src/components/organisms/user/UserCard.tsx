import { styled } from '@mui/material/styles'
import { UserType } from 'types/user'
import { Card } from 'components/atoms/card/Card'
import { UserIconWithName } from 'components/molecules/user/UserIconWithName'

export const UserCard = (props: { user: UserType }) => {
  const { user } = props
  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} />
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
}

const SDl = styled('dl')`
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
