type Props = {
    value: string
}

export default function SubmitButton({ value }: Props) {
    return (
        <input
            type='submit'
            value={value}
            className='w-full h-fit px-4 py-3 bg-[--btn-important] border-2 border-transparent rounded-lg text-white font-bold text-sm 
    transition-colors ease-out
    hover:bg-[--hover]'
        />
    )
}
