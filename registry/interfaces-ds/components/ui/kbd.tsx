import { cn } from "@/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
    return (
        <kbd
            data-slot="kbd"
            className={cn(
                "bg-background text-muted-foreground pointer-events-none inline-flex h-7 w-fit min-w-7 items-center justify-center gap-1 p-1.5 font-sans text-sm font-medium select-none border rounded-sm",
                "[&_svg:not([class*='size-'])]:size-3",
                "in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10",
                className
            )}
            {...props}
        />
    )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <kbd
            data-slot="kbd-group"
            className={cn("inline-flex items-center gap-1", className)}
            {...props}
        />
    )
}

export { Kbd, KbdGroup }
