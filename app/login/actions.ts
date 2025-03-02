"use server"
// 서버액션 (비동기로 실행되어야함)
export const handleForm = async (prevState: any, formData: FormData) => {
    console.log('i run in the server baby')
    new Promise((resolve)=> setTimeout(()=>{
        console.log('123')
    }, 3000))
    console.log(formData.get('email'), formData.get('password'))
    return {
        errors: ['wrong password', 'password too short'],
    }
}
