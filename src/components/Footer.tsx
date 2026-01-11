import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const profileLinks = {
    linkedin: "https://linkedin.com/in/taimoor-ikram/",
    github: "https://github.com/TaimoorIkram/",
    mail: "mailto:taimoorikram01@gmail.com",
  }

  return (
    <div className='flex flex-col items-center gap-6 p-5 mt-8'>
      <div className='w-full flex flex-col gap-5 justify-between items-center'>
        <p className='text-xl font-bold'>Life&apos;s like a game.</p>
        <div className='flex flex-row gap-3'>
          <Link href={profileLinks.linkedin}>
            <i className="bi bi-linkedin hover:text-white text-gray-500 text-2xl"></i>
          </Link>

          <Link href={profileLinks.github}>
            <i className="bi bi-github hover:text-white text-gray-500 text-2xl"></i>
          </Link>

          <Link href={profileLinks.mail}>
            <i className="bi bi-envelope hover:text-white text-gray-500 text-2xl"></i>
          </Link>
        </div>
      </div>
      <Image width={200} height={200} src="/images/signature.jpg" alt="My Unofficial Signature" className='w-20 ' />
      <p className='text-gray-500'>&copy; 2026 Taimoor Ikram.</p>
    </div>
  )
}
