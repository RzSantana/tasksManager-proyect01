import type { ChangeEventHandler } from "react"
import type { ArrowFunction } from "typescript"

type Props = {
    type: astroHTML.JSX.HTMLInputTypeAttribute
    name: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement> 
    error?: boolean
}

export default function Input({type, name, placeholder, error=false,  onChange}: Props) {
  return (
<input
    type={type}
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    required
    className={`bg-[--bg-aph20] w-full h-fit px-4 py-3 border-2 border-white/10 rounded-lg text-white
    text-sm
    placeholder:text-sm text-white/20
    hover:border-white/40
    focus:border-[--hover]
    focus-visible:outline-0
    ${error ? 'border-[--err]' : ''}
    `}
/>
  )
}

