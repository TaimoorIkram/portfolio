import React from 'react'

interface GenericButtonProps {
    label: string;
    onClick?: () => void;
    sectionIndex: number;
    currentSectionIndex: number;
}

export default function GenericButton({ label, onClick, sectionIndex, currentSectionIndex }: GenericButtonProps) {
    return (
        <div onClick={onClick} className={`${sectionIndex == currentSectionIndex ? 'bg-crimson-500' : ''} py-2 px-5 hover:bg-red-800 rounded-md duration-500 cursor-pointer`}>
            {label}
        </div>
    )
}
