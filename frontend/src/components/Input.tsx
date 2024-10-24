import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ChangeEventHandler } from 'react'

type Props = {
    type: astroHTML.JSX.HTMLInputTypeAttribute
    name: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    error?: boolean
    icon?: IconProp
    styleIcon?: string
}

export default function Input({
    type,
    name,
    placeholder,
    icon,
    error = false,
    onChange,
    styleIcon,
}: Props) {
    return (
        <div className='relative'>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                required
                className={`bg-[--bg-aph20] w-full h-fit px-4 py-3 border-2 rounded-lg outline-none ${
                    error ? 'border-[--err]' : 'border-white/10'
                } text-red text-sm placeholder:text-sm hover:border-white/40 focus:border-[--hover] autofill:bg-red-500`}
            />
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 right-4 ${styleIcon} `}
                />
            ) : (
                ''
            )}
        </div>
    )
}
