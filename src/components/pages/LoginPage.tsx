import { ChangeEvent, memo, useState } from 'react'
import { styled } from '@mui/material/styles'

import { Card } from 'components/atoms/card/Card'
import { Input } from 'components/atoms/input/input'
import { Stack, Box } from '@mui/material'
import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { useAuth } from 'hooks/useAuth'

export const LoginPage = memo(() => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState('')

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)
  const onClickLogin = () => login(userId)

  return (
    <Card>
      <SBox>
        <h2>ログイン</h2>
        <Stack spacing={2}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButton disabled={userId === ''} loading={loading} onClick={onClickLogin}>
            ログインする
          </PrimaryButton>
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
