"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/ui/text-effect"
import { HeroHeader } from "./header"



export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden h-screen relative md:min-h-screen">
        {/* Background radial effects */}
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        {/* Hero Content */}
        <section>
          <div className="relative pt-24 md:pt-36">
            {/* Background image */}
           
            {/* Radial overlay */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto mt-8 max-w-7xl px-6 text-center lg:text-left">
              {/* Intro link */}
              <motion.div
                
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="#link"
                  className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                >
                  <span className="text-foreground text-sm">
                    Introducing Reevio for your editing service
                  </span>
                  <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500 sm:size-7">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 sm:ml-0" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Hero headline */}
              <motion.div
                
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto flex mt-10 max-w-4xl text-balance text-2xl max-md:font-semibold md:text-2xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Edit. Create.
                   Captivate.
                </TextEffect>
              </motion.div>

              {/* Description */}
              <motion.div
                
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-12 m-2 max-w-2xl text-balance text-lg text-muted-foreground rounded-2xl p-4 hover:shadow-md hover:shadow-zinc-950/5 dark:hover:shadow-zinc-950/20 duration-150"
                >
                  From YouTube edits to cinematic brand films — Reevio helps creators and brands transform raw footage into scroll-stopping content.
                </TextEffect>
              </motion.div>

              {/* Buttons */}
              <motion.div
                
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row"
              >
                <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-5 text-base sm:hidden md:inline-flex h-10.5"
                  >
                    <Link href="/form">
                      <span className="text-nowrap">Contact now!</span>
                    </Link>
                  </Button>
                </div>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-10.5 rounded-xl px-5"
                >
                  <Link href="#link">
                    <span className="text-nowrap">🚀 Start Your Project</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
