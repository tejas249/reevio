import Image from 'next/image'
import header from '../public/header.jpg'
export default function Hero() {
  return (
     <div className='h-screen mt-10'>
         <div className='h-screen flex items-center justify-center shadow-md shadow-red-500'>
             <Image
      src={header}
      width={900}
      height={450}
      alt="Picture of the author"
      className='items-center justify-center rounded-4xl'
    />
         </div>
     </div>
  )
}