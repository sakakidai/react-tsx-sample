import { memo } from 'react'
import { styled } from '@mui/material/styles'

import { Card } from 'components/atoms/card/Card'
import { Input } from 'components/atoms/input/input'
import { Stack, Box } from '@mui/material'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'

export const LoginPage = memo(() => {
  return (
    <Card>
      <SBox>
        <h2>ログイン</h2>
        <Stack spacing={2}>
          <Input placeholder="ユーザーID" />
          <PrimaryButton>ログインする</PrimaryButton>
        </Stack>
      </SBox>
    </Card>
  )
})

const SBox = styled(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`
