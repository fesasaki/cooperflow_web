import { api } from './api'
import { LoginRequest, LoginResponse } from '@/types/auth'

export const AuthService = {
    async login(data: LoginRequest): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>(
            '/user/auth',
            data
        )

        return response.data
    },

    async logout() {
        return api.post('/auth/logout')
    }
    
}
