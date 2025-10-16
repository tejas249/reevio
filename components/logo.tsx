import React from 'react'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.jpg"
      alt="Logo"
      width={40}
      height={20}
      className={className}
      priority
    />
  )
}

export default Logo