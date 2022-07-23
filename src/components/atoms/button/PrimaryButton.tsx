import { ReactNode } from 'react'
import { BaseButton } from 'components/atoms/button/BaseButton'

type Props = {
  children: ReactNode
}

export const PrimaryButton = (props: Props) => {
  const { children } = props

  return <BaseButton color="primary">{children}</BaseButton>
}
