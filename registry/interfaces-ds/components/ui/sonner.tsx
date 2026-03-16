"use client"

import {
    CheckmarkFilled,
    InformationFilled,
    Renew,
    ErrorFilled,
    WarningAltFilled,
} from "@carbon/icons-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className="toaster group"
            icons={{
                success: <CheckmarkFilled className="size-4 text-green-500" />,
                info: <InformationFilled className="size-4" />,
                warning: <WarningAltFilled className="size-4 text-amber-500" />,
                error: <ErrorFilled className="size-4 text-red-500" />,
                loading: <Renew className="size-4 animate-spin" />,
            }}
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    )
}

export { Toaster }
