"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Renders a command container with default layout, appearance, and merged class names.
 *
 * @param className - Additional class names to merge with the component's defaults
 * @returns A React element representing the command container (includes default styling and a `data-slot="command"` attribute)
 */
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

/**
 * Render a dialog-based command palette that provides a composed Command surface with an accessible header.
 *
 * Renders a Dialog with a screen-reader-only header (title and description) and a DialogContent that wraps the Command UI.
 *
 * @param title - Accessible title shown to screen readers; defaults to "Command Palette"
 * @param description - Accessible description shown to screen readers; defaults to "Search for a command to run..."
 * @param children - Content to render inside the Command surface (command input, list, groups, items, etc.)
 * @param className - Additional class names applied to the DialogContent container
 * @param showCloseButton - Whether the DialogContent shows a close button; defaults to `true`
 * @returns A Dialog element containing the composed Command palette configured with the provided props
 */
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

/**
 * Render an input wrapper for the command palette that includes a leading search icon.
 *
 * @param className - Additional CSS classes to merge into the underlying input element.
 * @returns A React element containing the styled command input and a search icon, with all other props forwarded to the underlying `CommandPrimitive.Input`.
 */
function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a styled CommandPrimitive.List with a data-slot and merged className.
 *
 * The component applies default scrolling and max-height styles, merges any provided
 * `className`, and forwards all other props to the underlying `CommandPrimitive.List`.
 *
 * @returns The rendered `CommandPrimitive.List` element with default layout and styling
 */
function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the empty-state view for the command list with default padding and centered small text while forwarding all props to the underlying primitive.
 *
 * @returns The rendered CommandPrimitive.Empty element with `data-slot="command-empty"` and default spacing and typography classes.
 */
function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

/**
 * Wraps CommandPrimitive.Group with default layout and typography classes and a `data-slot="command-group"` attribute.
 *
 * The component merges any supplied `className` with the defaults and forwards all other props to the underlying primitive.
 *
 * @returns A styled CommandPrimitive.Group element with merged className and forwarded props.
 */
function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props}
    />
  )
}

/**
 * Separator used inside the command UI that applies default styling and a data-slot.
 *
 * Renders a CommandPrimitive.Separator with predefined separator classes and `data-slot="command-separator"`, merges any provided `className`, and forwards all other props to the underlying primitive.
 *
 * @param className - Additional class names to merge with the component's default styling
 * @returns The rendered separator element
 */
function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled command list item element and forwards all received props.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @returns A JSX element representing a command list item with built-in styling and forwarded props
 */
function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled span for displaying keyboard shortcuts inside command items.
 *
 * @param className - Additional class names merged with the component's default styles.
 * @returns A span element with shortcut-specific typography and `data-slot="command-shortcut"`.
 */
function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}