/*
 * @Author: zuo
 * @Date: 2026-01-14 17:35:14
 */
'use client'

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } =  useForm({
    resolver: zodResolver(schema)
  })
  return(
      <form onSubmit={handleSubmit((data) =>  console.log(data))}>
        <input {...register('email')} />
        { errors && <p>{errors.email?.message}</p> }
        <button>Login</button>

      </form>
  )
}