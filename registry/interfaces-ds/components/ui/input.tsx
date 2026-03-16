import * as React from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/20 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      size: {
        sm: "h-8 file:h-8",
        default: "h-10 file:h-10",
        lg: "h-12 file:h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Input({
  className,
  type,
  label,
  helperText,
  errorText,
  prefix,
  suffix,
  size,
  id,
  ["aria-invalid"]: ariaInvalidProp,
  ["aria-describedby"]: ariaDescribedByProp,
  ...props
}: Omit<React.ComponentProps<"input">, "size" | "prefix" | "suffix"> &
  VariantProps<typeof inputVariants> & {
    label?: string
    helperText?: string
    errorText?: string
    prefix?: React.ReactNode
    suffix?: React.ReactNode
  }) {

  const baseId = React.useId()
  const inputId = id ?? `input-${baseId}`
  const helperId = helperText ? `${inputId}-helper` : undefined
  const errorId = errorText ? `${inputId}-error` : undefined

  const ariaInvalid = ariaInvalidProp ?? (errorText ? "true" : undefined)
  const describedBy =
    [ariaDescribedByProp, helperId, errorId].filter(Boolean).join(" ") || undefined

  const inputField = (
    <input
      id={inputId}
      type={type}
      data-slot="input"
      aria-invalid={ariaInvalid}
      aria-describedby={describedBy}
      className={cn(
        inputVariants({ size }),
        "bg-background focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        prefix && (size === "sm" ? "pl-7" : "pl-8"),
        suffix && (size === "sm" ? "pr-7" : "pr-8"),
        className
      )}
      {...props}
    />
  )

  const needsWrapper = label || helperText || errorText || prefix || suffix

  if (!needsWrapper) {
    return inputField
  }

  return (
    <div className={cn("relative flex min-w-0 flex-col gap-1",
      "[&:has(input[class*='w-full'])]:w-full",
      "[&:has(input[class*='hidden'])]:hidden",
    )}>
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-foreground"
        >
          {label}
        </label>
      ) : null}
      <div className="relative">
        {prefix ? (
          <span
            className={cn(
              "pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center text-muted-foreground",
              size === "sm" ? "left-2" : "left-3"
            )}>
            {prefix}
          </span>
        ) : null}
        {inputField}
        {suffix ? (
          <span className={cn("pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center text-muted-foreground",
            size === "sm" ? "right-2" : "right-3"
          )}>
            {suffix}
          </span>
        ) : null}
      </div>
      {helperText ? (
        <p id={helperId} className="text-sm text-muted-foreground">
          {helperText}
        </p>
      ) : null}
      {errorText ? (
        <p id={errorId} className="text-sm text-destructive">
          {errorText}
        </p>
      ) : null}
    </div>
  )
}

Input.displayName = "Input"

export { Input, inputVariants }
