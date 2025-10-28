import { BackgroundLines } from '@/components/ui/background-lines'
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <BackgroundLines>
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Reevio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We help creators and brands transform raw footage into engaging content that captivates audiences.
            </p>
          </div>
        </div>
      </BackgroundLines>
    </div>
  )
}

export default page