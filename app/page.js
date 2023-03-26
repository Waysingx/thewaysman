import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-black'>
          <h1 className='text-white'>hello</h1>
    </div>
  )
}
