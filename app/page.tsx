import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <nav className='border-b border-grey-500 px-5 py-5 flex justify-between items-center'>
        <p>codebybence.com</p>
        <ModeToggle />
      </nav>
      <main>
        <div className='max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32'>
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-6xl tracking-tight text-center dark:text-white">
            Hey, it&apos;s me!
          </h1>
          <p className='text-center pt-10 text-xl'>i make some websites...</p>
          <div className='text-center pt-5'>
            <Button variant="link" asChild>
              <a href="https://github.com" target='_blank'>My GitHub Profile &gt;</a>
            </Button>
          </div>
        </div>
        <div className='py-16 max-w-5xl mx-auto'>
          <p className='text-slate-900 text-center font-bold text-3xl sm:text-4xl dark:text-white'>
            Projects I have built:
          </p>
          <div className='grid grid-cols-1 gap-10 justify-items-center py-12 md:grid-cols-2'>
            <ProjectCard name="social-media-clone" description="A social media website built with React and Firebase inspired by Twitter."
            githubLink="https://github.com/nagyb3/social-media-clone" siteLink="https://nagyb.xyz" />
            <ProjectCard name="spotify-stats" description="A React project made using the Spotify API.
              After signing in you can view your top tracks and artists in the last 4 weeks, 6 months or all time."
            githubLink="https://github.com/nagyb3/spotify-stats" siteLink="https://spotify-stats-pearl.vercel.app/" />
            <ProjectCard name="productivity-timer" description="A productivity tool featuring a pomodoro timer, a white/brown noise generator
             and a time tracker to record the time you have spent studying/working."
            githubLink="https://github.com/nagyb3/productivity-timer" siteLink="https://nagyb3.github.io/productivity-timer" />
            <ProjectCard name="tic-tac-toe" description="Really simple tic-tac-toe made with some Javascript"
            githubLink="https://github.com/nagyb3/tic-tac-toe" siteLink="https://nagyb3.github.io/tic-tac-toe/" />
          </div>
        </div>
        <div className='max-w-3xl pb-20 mx-auto px-10'>
          <h2 className='font-bold text-3xl sm:text-4xl text-center pb-10'>
            About me:
          </h2>
          <div className='text-justify'>
            My name is Bence Nagy and i am currently studying Computer Science at the University of Debrecen. In my freetime 
            I learning webdevelopment. This is website is where I showcase the things i have built so far.
          </div>
        </div>
      </main>
    </div>
  )
}
