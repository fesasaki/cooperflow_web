'use client'

import Input from '@/components/Inputs/Input'
import InputPassword from '@/components/Inputs/InputPassword'
import LoginLayout from '@/layout/LoginLayout'
import { Button } from '@/components/Buttons/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/img/brand/cooperflow_logo.png';
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

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

    const { register, handleSubmit, formState: { errors } } =
        useForm<LoginForm>({
            resolver: zodResolver(loginSchema)
        })

    const onSubmit = (data: LoginForm) => {

        if (isLoading) return

        console.log(data)

        setIsLoading(true)
        console.log('fazendo login...')
    }

    return (
        <LoginLayout>
            <div>
                <div className="mb-2">
                    <Image src={logo} alt="Cooperflow Logo" className="w-36" />
                </div>

                <div className="mb-8">
                    <span className="font-semibold text-3xl">
                        Bem vindo de volta!
                    </span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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
