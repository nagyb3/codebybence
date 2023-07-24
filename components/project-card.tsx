import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MyProps {
  name: string;
  description: string;
  githubLink: string;
  siteLink: string;
}

export function ProjectCard(props:MyProps) {
  return (
    <Card className="w-[350px] border-black dark:border-white flex flex-col justify-between
     shadow-[2px_2px_0px_#0F172A] dark:shadow-[2px_2px_0px_#ffffff]">
      <CardHeader className="gap-4">
        <CardTitle className="font-bold tracking-wide">{props.name}</CardTitle>
        <CardDescription className="dark:text-[#F8FAFC] text-[#0F172A] text-base">{props.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild><a target="_blank" href={props.githubLink}>Go to Github</a></Button>
        <Button asChild><a target="_blank" href={props.siteLink}>Go to Site</a></Button>
      </CardFooter>
    </Card>
  )
}
