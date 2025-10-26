import React from 'react'
import VideoPlayer from '@/components/ui/video'
import VideoInfo from '@/components/ui/video-info'
import VideoGallery from '@/components/VideoGallery'

const page = () => {
  return (
    // <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-black px-6 py-16">
    //  <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    //   <VideoInfo />      
    //     <div className="w-full flex items-center justify-center">
    //       <div className="w-full max-w-3xl">
    //         <VideoPlayer
    //           src="/videos/REAK.mp4"
    //           poster="/videos/REAK-poster.jpg"
    //           title="REAK · Real Estate"
    //           autoPlay={false}
    //           loop={true}
    //           muted={true}
    //           controls={true}
    //         />
    //       </div>
    //     </div>
    //   </div>
      
    // </main>
    <VideoGallery/>
  )
}

export default page