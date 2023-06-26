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
          <h1 className="text-slate-900 font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-center dark:text-white">
            Hey, it&apos;s me!
          </h1>
          <p className='text-center pt-10 text-xl'>i make some websites...</p>
          <div className='text-center pt-5'>
            <Button variant="link">My GitHub Profile</Button>
          </div>
        </div>
        <div className='pt-20 pb-20 max-w-5xl mx-auto'>
          <p className='text-slate-900 text-center font-bold text-3xl sm:text-2xl lg:text-xl dark:text-white'>
            Projects I have built:
          </p>
          <div className='grid grid-cols-1 gap-3 justify-items-center py-20 md:grid-cols-2'>
            <ProjectCard name="social-media-clone" description="A social media website built with React and Firebase inspired by Twitter."
            githubLink="https://github.com/nagyb3/social-media-clone" siteLink="https://nagyb.xyz" />
            <ProjectCard name="tic-tac-toe" description="Really simple tic-tac-toe made with some Javascript"
            githubLink="https://github.com/nagyb3/tic-tac-toe" siteLink="https://nagyb3.github.io/tic-tac-toe/" />
          </div>
        </div>
        <div className='max-w-3xl pb-20 mx-auto'>
          <h2 className='text-3xl font-bold sm:text-2xl lg:text-xl text-center pb-10'>
            About me:
          </h2>
          <div className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, quam consectetur enim pariatur expedita sint blanditiis dolorum sed. Laboriosam et vero doloribus sequi perspiciatis necessitatibus debitis commodi dolor ex cumque ratione nemo explicabo, voluptatibus eius quam delectus neque. Quam, dolorum.
          </div>
        </div>
      </main>
    </div>
  )
}
