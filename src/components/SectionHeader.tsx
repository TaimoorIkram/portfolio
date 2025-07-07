import React from 'react'

interface SectionHeaderProps {
    title: string,
}

export default function SectionHeader({title}: SectionHeaderProps) {
  return (
    <div className='relative flex flex-row font-black justify-center items-center text-6xl p-5 bg-crimson-500 overflow-hidden'>
        <p className='inset-x-0 -translate-x-[50%] absolute opacity-50'>a912fag3hsdh67kg8j90t8naw8n1trh2yj34kyu5i6l789jk7j6h5crac9w4nw9ap8c1l32hgf8790ad9sf80s76g8d67</p>
        <p>{title}</p>
    </div>
  )
}
