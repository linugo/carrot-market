'use client'
import FormInput from "../components/form-input"
import FormButton from "../components/form-btn"
import SocialLogin from "../components/social-login"
import { useFormState } from "react-dom"
import { handleForm } from "./actions"
export default function Login() {
    
    // state : 서버액션의 리턴 값
    // aciton : 트리거
    // 서버액션(handleForm)을 값으로 주면 그 액션의 결과값을 리턴
    const [state, action] = useFormState(handleForm, {
        potato: 1
    } as any) // <-- client 전용
    // handleForm과 초기값(null)을 전달
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요</h1>
                <h2 className="text-xl">Login with email and password</h2>
            </div>
            <form className="flex flex-col gap-3" action={action}>
                <FormInput name="email" type="email" placeholder="Email" required />
                <FormInput name="password" type="password" placeholder="Password" required />
                <FormButton text={"Login"} />
            </form>
            <SocialLogin/>
        </div>
    )
}