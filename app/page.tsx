import { CardWithForm } from "@/components/signInCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote: "It was the best of gyms, it was the brightest of environments, it was the age of health, it was the age of strength, it was the epoch of personal bests, it was the epoch of community support, it was the spring of transformation, it was the winter of motivation, thanks to the unparalleled services and the welcoming spirit of 3005gym.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To join, or not to join, that was the question: Whether 'twas nobler in the mind to ponder The pros and cons of gym memberships, Or to sign up at 3005gym, And by exercising transform them. I found my answer in their exceptional services, never to sleep on my fitness goals again.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that I hoped for or desired seemed but a dream within a dream, until I discovered 3005gym. There, dreams transformed into reality, guided by the dedication of the staff and the quality of their services",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a fitness enthusiast in possession of a 3005gym membership, must be in want of nothing more. The exceptional service, state-of-the-art equipment, and the supportive community have exceeded all expectations.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "Call me transformed. Some years ago—never mind how long precisely—having little or no direction in my fitness journey, and nothing particular to interest me in other gyms, I found 3005ym. There, amidst the sea of challenges, their services were a beacon of light, guiding me to the shores of my fitness goals.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Boxes />
   
      <div className="max-w-xl mx-auto relative z-10 w-full pt-20 md:pt-0 items-center justify-center flex flex-col">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
          Welcome to <br /> <span className="text-green-400">3000gym</span>.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Sign up now for a $0 onboarding fee💪!
        </p>

        <Link href="/sign-up" className="pt-5">
         <Button variant={"secondary"}>
            Get started 
            <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
         </Button>
        </Link>
      
        <div className="flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">Hear from our valuable members!</p>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
