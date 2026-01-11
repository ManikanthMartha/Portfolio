import type React from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-6xl grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  icon,
  description,
}: {
  className?: string
  title?: string | React.ReactNode
  icon?: React.ReactNode
  description?: string | React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-3 rounded-lg border border-[#233554] bg-[#112240]/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-cyan hover:shadow-lg hover:shadow-cyan/20 hover:bg-[#112240]",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-cyan font-mono font-bold">{title}</div>
          {description && <div className="text-xs text-[#8892b0] mt-2 font-mono">{description}</div>}
        </div>
        {icon && <div className="text-cyan group-hover/bento:scale-110 transition-transform duration-300">{icon}</div>}
      </div>
    </div>
  )
}
