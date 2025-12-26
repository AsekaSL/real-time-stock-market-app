'use client'

import FooterLink from "@/components/forms/FooterLink"
import InputFeild from "@/components/forms/InputFeild"
import { Button } from "@/components/ui/button"
import { signInWithEmail } from "@/lib/actions/auth.actions"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"



const SignIn = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
      } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: '',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        }, mode: 'onBlur'
      })
    
      const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data)
            const result = await signInWithEmail(data);
            console.log(result)
            if(result.success) router.push('/')
        } catch (error) {
            console.error(error)
            toast.error('Sign-in failed', {description: error instanceof Error ? error.message: 'Failed to Sign in'})
        }
    }

 return(
    <>
        <h1 className='form-title'>
            Log in Your Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/* Inputs */}
            <InputFeild name="email" type="email" label="email" placeholder="user@example.com" register={register} error={errors.email} validation={{required: 'Email address is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }} />
            <InputFeild name="password" type='password' label="password" placeholder="Enter your password" register={register} error={errors.password} validation={{required: 'Password is required', minLength: 8}} />


            <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                Log in
            </Button>
            <FooterLink text="Don't have an account? " linkText='Sign Up' href='/sign-up' />
        </form>
    </>
 )
}

export default SignIn