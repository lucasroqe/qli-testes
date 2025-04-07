"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export function HeroHighlightDemo() {
  return (
    <>
      <HeroHighlight>
        <motion.h1
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div>
            Atualizações em tempo real com{" "}
            <Highlight className="text-black dark:text-white text-6xl">
              Qli-mate
            </Highlight>
          </div>

          <div>
            {/* <Image src="/sol.png" width={400} height={400} alt="Mascote QLI-MATE"/> */}
          </div>
        </motion.h1>
      </HeroHighlight>
    </>
  );
}
