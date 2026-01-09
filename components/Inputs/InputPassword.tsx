'use client'

import React, { forwardRef, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    forgotPasswordHref?: string
}

const InputPassword = forwardRef<HTMLInputElement, Props>(
    ({ label, error, placeholder, forgotPasswordHref, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false)

        return (
            <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between text-sm">
                    <div className='flex items-center justify-between text-sm w-full'>
                        <label className="font-bold text-gray-900"> {label} </label>
                        <a className='hover:cursor-pointer hover:text-blue-500 hover:underline'>Esqueci minha senha</a>
                    </div>

                    {forgotPasswordHref && (
                        <a
                            href={forgotPasswordHref}
                            className="hover:cursor-pointer hover:text-blue-500 hover:underline"
                        >
                            Esqueci minha senha
                        </a>
                    )}
                </div>

                <div className="relative">
                    <input
                        ref={ref}
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        {...props}
                        className={`
                            w-full px-3 py-2 pr-10 border rounded-2xl outline-none transition-all
                            ${error
                                ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                            }
                            disabled:bg-gray-100 disabled:cursor-not-allowed
                        `}
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="
                            absolute right-3 top-1/2 -translate-y-1/2
                            text-gray-500 hover:text-gray-700
                            hover:bg-gray-300 p-1.5 rounded-full
                        "
                    >
                        {showPassword ? (
                            /* Olho fechado */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.875 18.825A10.05 10.05 0 0112 19
                                       c-5.523 0-10-4.477-10-10
                                       0-1.657.402-3.217 1.125-4.575M6.1 6.1
                                       A9.956 9.956 0 0112 5
                                       c5.523 0 10 4.477 10 10
                                       0 1.657-.402 3.217-1.125 4.575M15 12
                                       a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <line
                                    x1="3"
                                    y1="3"
                                    x2="21"
                                    y2="21"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                />
                            </svg>
                        ) : (
                            /* Olho aberto */
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5
                                       12 5c4.478 0 8.268 2.943
                                       9.542 7-1.274 4.057-5.064 7-9.542 7
                                       -4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {error && (
                    <span className="text-xs text-red-500">
                        {error}
                    </span>
                )}
            </div>
        )
    }
)

InputPassword.displayName = 'InputPassword'
export default InputPassword
