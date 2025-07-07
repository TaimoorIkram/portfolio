import React from 'react'

interface GenericButtonProps {
    icon: string,
    label: string,
}

export default function GenericActionButton({ label, icon }: GenericButtonProps) {
    return (
        <div className='flex flex-row gap-3 bg-crimson-500 py-2 px-5 hover:bg-red-800 rounded-md duration-500 cursor-pointer'>
            <i className={`bi bi-${icon}`} />
            <p>{label}</p>
        </div>
    )
}
