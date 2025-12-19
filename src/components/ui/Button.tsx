import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[2px] active:shadow-none border-2 border-black relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-funky hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 hover:scale-105 hover:rotate-1 hover:brightness-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-funky hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 hover:scale-105",
        outline:
          "bg-background hover:bg-accent hover:text-accent-foreground shadow-funky hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 hover:scale-105 hover:rotate-[-1deg] hover:bg-primary/5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-funky hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 hover:scale-105 hover:rotate-1 hover:brightness-110",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground active:translate-y-0 shadow-none hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline border-none shadow-none active:translate-y-0 hover:scale-105",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
