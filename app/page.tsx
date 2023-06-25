import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { ProjectCard } from '@/components/project-card'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <nav className='border-b border-grey-500 px-5 py-5 flex justify-between items-center'>
        <p>codebybence.com</p>
        <ModeToggle />
      </nav>
      <main>
        <div className='max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32'>
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Hey, it&apos;s me!
          </h1>
          <p className='text-center pt-10'>i make some websites...</p>
        </div>
        <div className='pt-20 pb-20 max-w-5xl mx-auto'>
          <p className='text-slate-900 text-center font-bold text-2xl sm:text-xl lg:text-l dark:text-white'>
            Project I have built:
          </p>
          <div className='grid grid-cols-1 gap-3 justify-items-center py-20 md:grid-cols-2'>
            <ProjectCard name="social-media-clone" description="A social media website built with React and Firebase inspired by Twitter."
            githubLink="https://github.com/nagyb3/social-media-clone" siteLink="https://nagyb.xyz" />
            <ProjectCard name="tic-tac-toe" description="Really simple tic-tac-toe made with some Javascript"
            githubLink="https://github.com/nagyb3/tic-tac-toe" siteLink="https://nagyb3.github.io/tic-tac-toe/" />
          </div>
        </div>
      </main>
    </div>
  )
}
