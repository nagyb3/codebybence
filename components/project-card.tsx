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
    <Card className="w-[350px] border-black dark:border-white
     shadow-[3px_3px_1px_#0F172A] dark:shadow-[3px_3px_1px_#ffffff]">
      <CardHeader>
        <CardTitle className="font-bold tracking-wide">{props.name}</CardTitle>
        <CardDescription className="dark:text-[#F8FAFC] text-[#0F172A]">{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild><a target="_blank" href={props.githubLink}>Go to Github</a></Button>
        <Button asChild><a target="_blank" href={props.siteLink}>Go to Site</a></Button>
      </CardFooter>
    </Card>
  )
}
