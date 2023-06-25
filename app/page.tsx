import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div>
      <nav className='border-b border-grey-500 px-5 py-5'>
      <ModeToggle />
      </nav>
      <main>
        <div className='max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Hey, it's me!
          </h1>
          <p className='text-center pt-10'>i make some websites...</p>
        </div>
      </main>
    </div>
  )
}
