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
          {/* <p className='text-center pt-10 text-xl'>i make some websites...</p> */}
          <p className='text-center pt-10 text-xl'>My name is Bence Nagy and I like to code, especially websites..</p>
          <div className='text-center pt-5'>
            <Button variant="link" asChild>
              <a href="https://github.com" className='text-xl' target='_blank'>My GitHub Profile &gt;</a>
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
            {/* <ProjectCard name="productivity-timer" description="A productivity tool featuring a pomodoro timer, a brown noise generator
             and a time tracker to record the time you have spent studying/working."
            githubLink="https://github.com/nagyb3/productivity-timer" siteLink="https://nagyb3.github.io/productivity-timer" /> */}
            <ProjectCard name="blogapi" description="A NodeJS backend API for a personal blog website where users can also signup and leave comments on the posts."
            githubLink="https://github.com/nagyb3/blogapi" siteLink="https://blog.codebybence.com" />
            <ProjectCard name="messenger" description="A fullstack app that lets users message each other. There is also a REST API made in express."
            githubLink="https://github.com/nagyb3/messenger-frontend" siteLink="https://messenger-frontend-nine.vercel.app/" />
          </div>
        </div>
        <div className='mb-16 w-fit mx-auto'>
          <h2 className='font-bold text-3xl sm:text-4xl mb-12'>Technologies:</h2>
          <ul className='list-disc text-lg flex flex-col gap-2'>
            <li>React JS</li>
            <li>NodeJS Express</li>
            <li>MongoDB</li>
            <li>HTML/CSS</li>
            <li>TailwindCSS</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='max-w-5xl pb-20 mx-auto px-8'>
          <h2 className='font-bold text-3xl sm:text-4xl text-center pb-10'>
            About me:
          </h2>
          <div className='text-justify text-xl'>
            My name is Bence Nagy and i am currently studying Computer Science at the University of Debrecen. In my freetime 
            I learning webdevelopment. This is website is where I showcase the things i have built so far.
          </div>
        </div>
      </main>
    </div>
  )
}
