import { styled } from '@mui/material/styles'

export const Footer = () => {
  return <SFooter>&copy; 2022 test Inc.</SFooter>
}

const SFooter = styled('footer')`
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: white;
  text-align: center;
  padding: 16px 0;
  width: 100%;
`
