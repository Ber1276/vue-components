export type ButtonType = "primary" | "success" | "warning" | "danger" | "info"
export type ButtonSize = "small" | "medium" | "large"
export type NativeType = "button" | "submit" | "reset"
export interface ButtonInstance {
  ref: HTMLButtonElement
}

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
  icon?: string
  loading?: boolean
}
