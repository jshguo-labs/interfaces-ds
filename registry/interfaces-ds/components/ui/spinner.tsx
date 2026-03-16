import { Renew } from "@carbon/icons-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<typeof Renew>) {
    return (
        <Renew
            className={cn("size-4 animate-spin", className)}
            {...props}
        />
    )
}

export { Spinner }
