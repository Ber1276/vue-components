export interface AlertProps {
  message: string
  type?: "success" | "error" | "warning" | "info"
  effect?: "dark" | "light"
  closeable?: boolean
  icon?: string
  center?: boolean
  onclose?: () => void
}

export interface AlertEvents {
  (e: "close"): void
}

export interface AlertInstance {
  close: () => void
}
