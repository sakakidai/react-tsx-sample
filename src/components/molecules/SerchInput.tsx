import { styled } from '@mui/material/styles'

import { PrimaryButton } from 'components/atoms/button/PrimaryButton'
import { Input } from 'components/atoms/input/input'

export const SeachInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWapper>
    </SContainer>
  )
}

const SContainer = styled('div')`
  display: flex;
  align-items: center;
`

const SButtonWapper = styled('div')`
  padding-left: 8px;
`
