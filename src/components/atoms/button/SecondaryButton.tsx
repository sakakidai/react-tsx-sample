import { ReactNode } from 'react'
import { BaseButton } from 'components/atoms/button/BaseButton'

type Props = {
  children: ReactNode
}

export const SecondaryButton = (props: Props) => {
  const { children } = props

  return <BaseButton color="secondary">{children}</BaseButton>
}
