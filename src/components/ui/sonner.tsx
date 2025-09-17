import type { StudentType } from "@/@types/StudentType"
import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }: StudentType ) => {

  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
