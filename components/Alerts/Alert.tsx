import React from 'react'

interface Props {
    type: "info" | "danger" | "success" | "warning" | "dark"
    title?: string
    message: string
}

export default function Alert({ type, title, message }: Props) {
    switch (type) {
        case 'info': {
            return (
                <div className="p-4 text-sm text-blue-500 rounded-2xl bg-blue-100" role="alert">
                    <span className="font-medium">{ title }</span> { message }
                </div>
            )
        }
        case 'danger': {
            return (
                <div className="p-4 text-sm text-red-700 rounded-2xl bg-red-100" role="alert">
                    <span className="font-medium">{ title }</span> { message }
                </div>
            )
        }
        case 'success': {
            return (
                <div className="p-4 text-sm text-green-700 rounded-2xl bg-green-100" role="alert">
                    <span className="font-medium">{ title }</span> { message }
                </div>
            )
        }
        case 'warning': {
            return (
                <div className="p-4 text-sm text-orange-500 rounded-2xl bg-orange-100" role="alert">
                    <span className="font-medium">{ title }</span> { message }
                </div>
            )
        }
        case 'dark': {
            return (
                <div className="p-4 text-sm text-gray-500 rounded-2xl bg-gray-100" role="alert">
                    <span className="font-medium">{ title }</span> { message }
                </div>
            )
        }
    }
}
