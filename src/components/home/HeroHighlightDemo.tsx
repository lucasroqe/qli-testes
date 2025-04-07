"use client"
import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import Image from "next/image"

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-white leading-tight">
              Atualizações em tempo real com{" "}
              <Highlight className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl block mt-2">
                Qli-mate
              </Highlight>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              Monitore e acompanhe dados climáticos em tempo real com nossa plataforma intuitiva e poderosa.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Começar agora
              </button>
              <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-white font-medium rounded-lg transition-colors">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/qli-mascote.png"
                width={500}
                height={500}
                alt="Mascote QLI-MATE"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  )
}

