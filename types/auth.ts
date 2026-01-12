export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    access_token: string
    expires_in: string
    user: {
        id: string
        name: string
        email: string
        position: string
    }
}
