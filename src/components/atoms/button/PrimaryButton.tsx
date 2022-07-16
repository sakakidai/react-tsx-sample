import { ReactNode } from 'react'
import { BaseButton } from 'components/atoms/button/BaseButton'

export const PrimaryButton = (props: { children: ReactNode }) => {
  const { children } = props

  return <BaseButton color="primary">{children}</BaseButton>
}
