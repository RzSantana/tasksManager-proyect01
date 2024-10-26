import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, type ChangeEventHandler } from 'react'

type Props = {
    type: astroHTML.JSX.HTMLInputTypeAttribute
    name: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    error?: boolean
    iconView?: boolean
    icon?: IconProp
    styleIcon?: string
}

export default function Input({
    type,
    name,
    placeholder,
    icon,
    iconView,
    error = false,
    onChange,
    styleIcon,
}: Props) {
    const [hiddenPassword, setHiddenPassword] = useState(false)

    return (
        <div className='relative'>
            <input
                type={
                    type == 'password'
                        ? hiddenPassword
                            ? 'text'
                            : 'password'
                        : type
                }
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                required
                className={`bg-[--bg-aph20] w-full h-fit px-4 py-3 border-2 rounded-lg outline-none ${
                    error ? 'border-[--err]' : 'border-white/10'
                } text-red text-sm placeholder:text-sm hover:border-white/40 focus:border-[--hover] autofill:bg-red-500`}
            />

            <div className='absolute flex flex-row gap-2 top-1/2 -translate-y-1/2 right-4'>
                {iconView ? (
                    <FontAwesomeIcon
                        icon={hiddenPassword ? faEye : faEyeSlash}
                        onClick={() => setHiddenPassword(!hiddenPassword)}
                        className={`w-5 h-5 cursor-pointer`}
                    />
                ) : (
                    ''
                )}

                {icon ? (
                    <FontAwesomeIcon
                        icon={icon}
                        className={`w-5 h-5 ${styleIcon} `}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
