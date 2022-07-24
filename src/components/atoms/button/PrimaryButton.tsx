import { ReactNode } from 'react'
import { BaseButton } from 'components/atoms/button/BaseButton'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const PrimaryButton = (props: Props) => {
  const { children, disabled, loading, onClick } = props

  return (
    <BaseButton color="primary" onClick={onClick} disabled={disabled} loading={loading}>
      {children}
    </BaseButton>
  )
}
