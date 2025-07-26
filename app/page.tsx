"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      if (theme === "dark") {
        main.classList.remove("bg-[url('../public/gradientOne.svg')]");
      } else {
        main.classList.add("bg-[url('../public/gradientOne.svg')]");
      }
    }
  }, [theme]);

  return (
    <div
      className={`font-mono overflow-hidden dark:selection:bg-orange-700 selection:bg-orange-300 bg-cover bg-center min-h-screen text-[#0F172A] dark:text-[#F8FAFC]`}
    >
      <nav className="border-b border-[#797878] px-5 py-4 flex justify-between items-center">
        <p>codebybence.com</p>
        <ModeToggle />
      </nav>
      <main className={"bg-[url('../public/gradientOne.svg')]"}>
        <div className="max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-6xl tracking-tight text-center dark:text-white">
            Hey, it&apos;s me!
          </h1>
          <p className="text-center pt-10 text-lg">
            My name is Bence Nagy and I like to code, especially websites..
          </p>
          <div className="text-center pt-5 flex gap-x-4 justify-center font-extrabold">
            <Button variant="link" asChild>
              <a
                href="https://github.com/nagyb3"
                className="text-xl"
                target="_blank"
              >
                My GitHub Profile &gt;
              </a>
            </Button>
            <Button variant="link" asChild>
              <a href="https://blog.codebybence.com" className="text-xl">
                My Blog &gt;
              </a>
            </Button>
          </div>
        </div>
        <div className="py-16 max-w-5xl mx-auto">
          <p className="text-slate-900 text-center font-bold text-3xl sm:text-4xl dark:text-white">
            Projects I have built:
          </p>
          <div className="grid grid-cols-1 gap-10 justify-items-center py-12 md:grid-cols-2">
            <ProjectCard
              name="clonebook"
              description="A fullstack project built with NextJs, ExpressJs and MongoDB. A social media website where can make posts and send messages to your friends."
              githubLink="https://github.com/nagyb3/clonebook-next"
              siteLink="https://clonebook-next.vercel.app/"
            />
            <ProjectCard
              name="track-stats"
              description="A React project made using the Spotify API.
              You can view your top tracks and artists in the last 4 weeks, 6 months or all time."
              githubLink="https://github.com/nagyb3/track-stats"
              siteLink="https://track-stats.vercel.app/"
            />
          </div>
        </div>
        <div className="max-w-5xl pb-20 mx-auto px-8">
          <h2 className="font-bold text-3xl sm:text-4xl text-center pb-10">
            About me:
          </h2>
          <div className="text-justify text-xl">
            <p>
              My name is Bence Nagy, and occasionally I like to do some webdev
              projects here and there. This is my portfolio website where I
              showcase a fraction of the things I have built so far.
            </p>
            <p className="mt-4">Enjoy! &#128513;</p>
          </div>
        </div>
        <div className="pb-32 w-full mx-auto flex flex-col items-center px-8">
          <h2 className="font-bold text-3xl sm:text-4xl mb-12">
            Technologies I use the most:
          </h2>
          <ul className="list-disc text-lg flex flex-col gap-2 max-w-5xl w-full">
            <li>React, NextJS</li>
            <li>Express, NestJS, NodeJS</li>
            <li>Typescript</li>
            <li>PostgreSQL, MongoDB</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div className="pb-32 w-full mx-auto flex flex-col items-center px-8">
          <h2 className="font-bold text-3xl sm:text-4xl mb-12">
            Some technologies I am trying to use more:
          </h2>
          <ul className="list-disc text-lg flex flex-col gap-2 max-w-5xl w-full">
            <li>Java</li>
            <li>Angular</li>
          </ul>
        </div>
      </main>
      <footer className="flex justify-center py-4">footer.</footer>
    </div>
  );
}
