import { styled } from '@mui/material/styles'
import { Avatar as MuiAvatar } from '@mui/material'

export const Avatar = (props: { image: string; alt: string; width: number; height: number }) => {
  const { image, alt, width, height } = props
  return <SAvatar src={image} alt={alt} sx={{ width: width, height: height }} />
}

const SAvatar = styled(MuiAvatar)`
  align-items: center;
  margin: auto;
`
