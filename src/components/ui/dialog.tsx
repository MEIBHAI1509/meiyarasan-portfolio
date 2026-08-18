"use client";

import * as React from "react";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/* ============================================================ */
/* Root */
/* ============================================================ */

const Dialog = DialogPrimitive.Root;

/* ============================================================ */
/* Trigger */
/* ============================================================ */

const DialogTrigger = DialogPrimitive.Trigger;

/* ============================================================ */
/* Portal */
/* ============================================================ */

const DialogPortal = DialogPrimitive.Portal;

/* ============================================================ */
/* Backdrop */
/* ============================================================ */

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<
  typeof DialogPrimitive.Backdrop
>) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/75 backdrop-blur-[3px]",
        "data-[starting-style]:opacity-0",
        "data-[ending-style]:opacity-0",
        "transition-opacity duration-300",
        className,
      )}
      {...props}
    />
  );
}

/* ============================================================ */
/* Viewport */
/* ============================================================ */

function DialogViewport({
  className,
  ...props
}: React.ComponentProps<
  typeof DialogPrimitive.Viewport
>) {
  return (
    <DialogPrimitive.Viewport
      className={cn(
        "fixed inset-0 z-50",
        "flex items-center justify-center",
        "p-3 sm:p-6",
        "overflow-y-auto",
        "overscroll-contain",
        className,
      )}
      {...props}
    />
  );
}

/* ============================================================ */
/* Content */
/* ============================================================ */

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof DialogPrimitive.Popup
>) {
  return (
    <DialogPortal>
      <DialogBackdrop />

      <DialogViewport>
        <DialogPrimitive.Popup
          className={cn(
            "relative z-50",

            /* Size */
            "w-[min(92vw,900px)]",
            "max-w-[900px]",

            /* Height */
            "max-h-[90dvh]",

            /* Layout */
            "flex",
            "flex-col",

            /* Appearance */
            "rounded-2xl",
            "border",
            "border-white/[0.08]",
            "bg-zinc-950",
            "text-white",
            "shadow-2xl",

            /* Prevent the popup itself from scrolling */
            "overflow-hidden",

            /* Animation */
            "origin-center",
            "transition-[opacity,transform]",
            "duration-300",

            "data-[starting-style]:translate-y-2",
            "data-[starting-style]:scale-[0.98]",
            "data-[starting-style]:opacity-0",

            "data-[ending-style]:translate-y-2",
            "data-[ending-style]:scale-[0.98]",
            "data-[ending-style]:opacity-0",

            className,
          )}
          {...props}
        >
          {children}

          {/* Single shared close button */}
          <DialogPrimitive.Close
            aria-label="Close dialog"
            className={cn(
              "absolute right-4 top-4 z-50",
              "flex h-9 w-9 items-center justify-center",
              "rounded-full",
              "border border-white/[0.08]",
              "bg-black/30",
              "text-zinc-500",
              "backdrop-blur-md",
              "transition-all duration-200",
              "hover:border-white/[0.15]",
              "hover:bg-white/[0.08]",
              "hover:text-white",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-primary/40",
            )}
          >
            <XIcon size={16} />
            <span className="sr-only">
              Close dialog
            </span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

/* ============================================================ */
/* Title */
/* ============================================================ */

const DialogTitle = React.forwardRef<
  React.ElementRef<
    typeof DialogPrimitive.Title
  >,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Title
  >
>(function DialogTitle(
  { className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold text-white",
        className,
      )}
      {...props}
    />
  );
});

/* ============================================================ */
/* Description */
/* ============================================================ */

const DialogDescription = React.forwardRef<
  React.ElementRef<
    typeof DialogPrimitive.Description
  >,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Description
  >
>(function DialogDescription(
  { className, ...props },
  ref,
) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(
        "text-sm text-zinc-500",
        className,
      )}
      {...props}
    />
  );
});

/* ============================================================ */
/* Close */
/* ============================================================ */

const DialogClose = DialogPrimitive.Close;

/* ============================================================ */
/* Exports */
/* ============================================================ */

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogViewport,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};