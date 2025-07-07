import React from 'react'

interface GenericButtonProps {
    label: string,
    onClick?: () => void,
}

export default function GenericButton({ label, onClick }: GenericButtonProps) {
    return (
        <div onClick={onClick} className='py-2 px-5 hover:bg-red-800 rounded-md duration-500 cursor-pointer'>
            {label}
        </div>
    )
}
