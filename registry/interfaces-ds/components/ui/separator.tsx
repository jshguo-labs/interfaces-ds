"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border bg-clip-content data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=horizontal]:px-(--separator-horizontal-gutter,0px) data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch data-[orientation=vertical]:py-(--separator-vertical-gutter,0px) shrink-0",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
