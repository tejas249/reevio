"use client"
import React from 'react'
import  {Video } from '@/components/ui/video'

const page = () => {
  return (
    <div>
         <div className="mt-6 mb-2 flex justify-center lg:mt-32">
            <div className="w-full max-w-3xl rounded-lg shadow-lg">
                    <Video/>
            </div>
          </div>
    </div>
  )
}

export default page