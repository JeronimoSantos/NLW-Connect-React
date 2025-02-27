'use client'

import { Button } from "@/componentes/button";
import { InputRoot, InputIcon, InputField } from "@/componentes/input";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const subscriptionScrima = z.object({
    name: z.string().min(2, 'Digiti o seu nome Completo'),
    email: z.string().email('Digiti um e-mail valido'),
})

type subscriptionScrima = z.infer<typeof subscriptionScrima>

export function SubscriptionForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<subscriptionScrima>({
        resolver: zodResolver(subscriptionScrima),
    })

    function onSubscribe(data: subscriptionScrima) {
        
    }

    return (
        <form onSubmit={handleSubmit(onSubscribe)} className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className="text-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>

          <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField 
                            type='text' placeholder='Digiti seu nome completo' {...register('name')}/>
                    </InputRoot>

                    {errors.name && (
                        <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField 
                            type='email' placeholder='Digiti seu e-mail' {...register('email')}/>
                    </InputRoot>

                    {errors.email && (
                        <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
                    )}
                </div>
          </div>

            <Button type='submit'>
              Confirmar
              <ArrowRight />
            </Button>
        </form>
    )
}