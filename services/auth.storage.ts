import { LoginResponse } from '@/types/auth'

const AUTH_KEY = '@cooperflow:auth'

export function saveAuth(data: LoginResponse) {
    if (typeof window === 'undefined') return

    localStorage.setItem(AUTH_KEY, JSON.stringify(data))
}

export function getAuth(): LoginResponse | null {
    if (typeof window === 'undefined') return null

    const stored = localStorage.getItem(AUTH_KEY)
    if (!stored) return null

    return JSON.parse(stored)
}

export function clearAuth() {
    if (typeof window === 'undefined') return

    localStorage.removeItem(AUTH_KEY)
}
