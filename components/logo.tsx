import React from 'react'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={120}
      height={40}
      className={className}
      priority
    />
  )
}

export default Logo