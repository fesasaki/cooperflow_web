'use client'

import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: any
}

const Input = forwardRef<HTMLInputElement, Props>(
    ({ label, type = 'text', error, placeholder, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-1 w-full">
                {label && (
                    <label className="text-sm font-bold text-gray-900">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    {...props}
                    className={`
                        px-3 py-2 border rounded-2xl outline-none transition-all
                        ${error
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }
                        disabled:bg-gray-100 disabled:cursor-not-allowed
                    `}
                />

                {error && (
                    <span className="text-xs text-red-500">
                        {error}
                    </span>
                )}
            </div>
        )
    }
);

export default Input
