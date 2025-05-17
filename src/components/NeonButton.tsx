
import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "violet" | "pink" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", size = "md", children, ...props }, ref) => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setCoords({ x, y });
    };

    return (
      <button
        className={cn(
          "relative font-medium rounded-md transition-all duration-300 tracking-wider button-hover-effect",
          "border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50",
          "overflow-hidden uppercase flex items-center justify-center gap-2",
          {
            "border-futuristic-cyan text-futuristic-cyan hover:bg-futuristic-cyan/10 focus:ring-futuristic-cyan/50": variant === "cyan",
            "border-futuristic-violet text-futuristic-violet hover:bg-futuristic-violet/10 focus:ring-futuristic-violet/50": variant === "violet",
            "border-futuristic-pink text-futuristic-pink hover:bg-futuristic-pink/10 focus:ring-futuristic-pink/50": variant === "pink",
            "border-gray-700 text-gray-300 hover:bg-gray-700/10 focus:ring-gray-500/30": variant === "outline",
            "border-transparent bg-transparent text-gray-300 hover:text-white focus:ring-gray-500/30": variant === "ghost",
            "py-1 px-3 text-xs": size === "sm",
            "py-2 px-6 text-sm": size === "md",
            "py-3 px-8 text-base": size === "lg",
          },
          className
        )}
        style={
          {
            "--mouse-x": `${coords.x}%`,
            "--mouse-y": `${coords.y}%`,
          } as React.CSSProperties
        }
        onMouseMove={handleMouseMove}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export default NeonButton;
