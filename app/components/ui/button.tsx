import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, href, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : href ? Link : "button"
    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary/90",
      secondary: "bg-black text-white hover:bg-black/90",
      outline: "border border-black text-black hover:bg-black hover:text-white",
      ghost: "text-primary hover:bg-primary/10",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-2",
      lg: "px-8 py-3 text-lg",
    }

    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className,
    )

    if (href) {
      return (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      )
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }

