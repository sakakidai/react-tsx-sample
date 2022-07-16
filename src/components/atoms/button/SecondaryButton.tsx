import { ReactNode } from 'react'
import { BaseButton } from 'components/atoms/button/BaseButton'

export const SecondaryButton = (props: { children: ReactNode }) => {
  const { children } = props

  return <BaseButton color="secondary">{children}</BaseButton>
}
