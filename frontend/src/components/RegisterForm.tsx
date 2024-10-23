import Input from '@/components/Input'
import SubmitButton from '@/components/SubmitButton'
import { error } from 'node_modules/astro/dist/core/logger/core';
import { useState, type FormEvent } from 'react'

export default function LoginForm() {
    const [errors, setErrors] = useState({
        name: false,
        lastname: false,
        email: false,
        password: false,
        confirmPassword: false,
        terms: false
    });
    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confimPassword, setConfigPassword] = useState<string>('')
    const [terms, setTerms] = useState(false)

    const isValidConfirmPassword = () => {
        if (password != confimPassword) {
            setErrors({...errors, confirmPassword: true})            
            return
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        isValidConfirmPassword()
    }

    return (
        <>
            <form
                id='register-form'
                action=''
                method='post'
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 max-w-xs'>
                <div className='flex flex-row gap-4'>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    <Input
                        type='text'
                        name='lastname'
                        placeholder='Lastname'
                        onChange={(event) => {
                            setLastname(event.target.value)
                        }}
                    />
                </div>

                <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <Input
                    type='password'
                    name='confirm-password'
                    placeholder='Confirm Password'
                    error={errors.confirmPassword}
                    onChange={(event) => {
                        setConfigPassword(event.target.value)
                    }}
                />

                <SubmitButton value='Create account' />
            </form>

            <div className='flex flex-row gap-3 items-center'>
                <input
                    form='register-form'
                    type='checkbox'
                    name='terms'
                    checked={terms}
                    onChange={() => {setTerms(!terms)}}
                    required
                    className='w-5 h-5'
                />
                <div className='flex flex-row gap-1 text-xs justify-center'>
                    <span>I agree to the</span>
                    <a
                        href='legal/terms'
                        className='text-[--text-primary] font-bold text-xs justify-center'>
                        Terms & Conditions
                    </a>
                </div>
            </div>
        </>
    )
}
