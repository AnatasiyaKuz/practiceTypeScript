interface ErrorMsg {
    error: string
}

export function Error({ error }: ErrorMsg) {
    return (
        <div><p className='text-center text-red-600'>{error}</p></div>
    )
}