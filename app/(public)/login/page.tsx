'use client'
import Input from '@/components/Inputs/Input'
import InputPassword from '@/components/Inputs/InputPassword'
import LoginLayout from '@/layout/LoginLayout'
import { Button } from '@/components/Buttons/Button'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthService } from '@/services/auth.service'
import Alert from '@/components/Alerts/Alert'
import { AxiosError } from 'axios'
import { getAuth, saveAuth } from '@/services/auth.storage'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/paths'
import Logo from '@/components/Brand/Logo'

type LoginForm = {
    email: string
    password: string
}

export const loginSchema = z.object({
    email: z.string().email("Email inválido").min(1, 'Insira o e-mail'),
    password: z.string().min(1, "Por favor, insira a senha"),
})

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<boolean | string>(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } =
        useForm<LoginForm>({
            resolver: zodResolver(loginSchema)
        })

    const doLogin = async (data: LoginForm) => {

        if (isLoading) return

        setIsLoading(true);
        setError(false);

        try {

            const response = await AuthService.login(data)
            saveAuth(response)

            setTimeout(() => {
                router.push(ROUTES.dashboard)
            }, 100)

        } catch (err) {
            setIsLoading(false);

            let message = 'Houve um erro inesperado ao fazer o login';

            if (err instanceof AxiosError) {
                const status = err.response?.status;
                const apiMessage = err.response?.data?.message;

                if (status === 401 && apiMessage) {
                    message = apiMessage;
                }
            }

            setError(message);
        }
    }

    useEffect(() => {
        const credentials = getAuth();
        if(credentials) {
            router.push(ROUTES.dashboard)
        }
    },[])

    return (
        <LoginLayout>
            <div>
                <div className="mb-2">
                    <Logo />
                </div>

                <div className="mb-8">
                    <span className="font-semibold text-3xl">
                        Bem vindo de volta!
                    </span>
                </div>

                <form onSubmit={handleSubmit(doLogin)}>
                    <div className="mb-4">
                        <Input
                            label="E-mail"
                            type="email"
                            placeholder="seu@email.com"
                            {...register("email")}
                            error={errors.email?.message}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="mb-6">
                        <InputPassword
                            label="Senha"
                            placeholder=""
                            {...register("password")}
                            error={errors.password?.message}
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className='mb-4 opacity-0 animate-fade-in-up duration-300'>
                            <Alert type={'danger'} message={String(error)} />
                        </div>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        className="w-full"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </LoginLayout>
    )
}
