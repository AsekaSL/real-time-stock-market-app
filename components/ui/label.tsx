"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * Render a styled label element that forwards props to Radix's Label.Root.
 *
 * @param className - Additional CSS class names to append to the component's default utility classes.
 * @param props - All other props are forwarded to `LabelPrimitive.Root`.
 * @returns A `LabelPrimitive.Root` element with composed classes, `data-slot="label"`, and forwarded props.
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }