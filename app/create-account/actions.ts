'use server'

import { z } from 'zod';

// const usernameSchema = z.string().min(5).max(10);
const formSchema = z.object({
    username: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10)
})

export async function createAccount(prevState: any, formData: FormData){
    const data = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    }
    // safeParse는 에러를 throw하지 않음
    const result = formSchema.safeParse(data)
    if (!result.success){
        return result.error.flatten();
    }
    // try {
    //     formSchema.parse(data)
    // } catch (e) {
    //     console.log(e)
    // }
}