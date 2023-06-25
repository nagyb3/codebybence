import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div>
      <nav className='border-b border-grey-500 px-5 py-5'>
      <ModeToggle />
      </nav>
      <h1>hi this is home</h1>
    </div>
  )
}
