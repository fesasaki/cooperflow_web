import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: "primary" | "secondary" | "danger" | "ghost"
    isLoading: boolean
}

export const Button = ({
    children,
    variant = "primary",
    isLoading = false,
    disabled,
    className
}: ButtonProps) => {
    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary-hover focus:ring-blue-500",
        secondary:
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
        danger:
            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        ghost:
            "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    }

    return (
        <button
            disabled={disabled || isLoading}
            className={`
                inline-flex items-center justify-center gap-2
                px-4 py-2 rounded-2xl font-medium text-sm
                transition-all duration-200
                focus:outline-none focus:ring-2
                disabled:opacity-60 disabled:cursor-not-allowed
                hover:cursor-pointer
                ${variants[variant]}
                ${className ?? ""}
            `}
        >
            {isLoading && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {children}
        </button>
    )
}
