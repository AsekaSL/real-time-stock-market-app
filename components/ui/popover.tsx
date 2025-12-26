"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

/**
 * Renders a Radix Popover Root, forwarding all props and adding `data-slot="popover"`.
 *
 * @param props - Props to pass through to the underlying Radix Popover Root component.
 * @returns The Popover Root element with forwarded props and `data-slot="popover"`.
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Renders a Popover trigger element that forwards all received props and includes a `data-slot="popover-trigger"` attribute.
 *
 * @returns The underlying Popover trigger element with forwarded props.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Renders themed popover content inside a portal with sensible defaults and merged styling.
 *
 * Renders Radix Popover Content wrapped in a portal, applies a composed default className
 * (merged with `className`), adds `data-slot="popover-content"`, and forwards remaining props.
 *
 * @param className - Additional class names to merge with the component's default styles
 * @param align - Alignment of the popover relative to its trigger (defaults to `"center"`)
 * @param sideOffset - Distance in pixels between the popover and its trigger (defaults to `4`)
 * @returns The popover content element
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * Render a Radix Popover Anchor element with a identifying `data-slot` attribute and all provided props forwarded.
 *
 * @returns The rendered popover anchor element.
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }