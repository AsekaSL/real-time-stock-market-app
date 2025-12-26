'use client'

import FooterLink from "@/components/forms/FooterLink"
import InputFeild from "@/components/forms/InputFeild"
import { Button } from "@/components/ui/button"
import { SubmitHandler, useForm } from "react-hook-form"



const SignIn = () => {

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
    
      const onSubmit: SubmitHandler<SignUpFormData> = async (data: SignUpFormData) => {
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
        }
      }

 return(
    <>
        <h1 className='form-title'>
            Log in Your Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
            {/* Inputs */}
            <InputFeild name="Email" label="Email" placeholder="user@example.com" register={register} error={errors.fullName} validation={{required: 'Email address is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required' }} />
            <InputFeild name="Password" type='password' label="Password" placeholder="Enter your password" register={register} error={errors.fullName} validation={{required: 'Full Name is required', minLength: 8}} />


            <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                Log in
            </Button>
            <FooterLink text="Don't have an account? " linkText='Sign Up' href='/sign-up' />
        </form>
    </>
 )
}

export default SignIn