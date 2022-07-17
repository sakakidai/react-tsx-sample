import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'
import { Avatar } from 'components/atoms/image/Avatar'

export const UserIconWithName = (props: { name: string; image: string }) => {
  const { name, image } = props
  return (
    <SContainer>
      <Avatar image={image} alt="プロフィール画像" width={160} height={160} />
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled(Container)`
  text-align: center;
`

const SName = styled('p')`
  font-size: 18px;
  font-weight: bold;
  color: #40514e;
`
