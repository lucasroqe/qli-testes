"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative flex size-full h-[35rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <Badge>
            Texto
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
        </div>
        <div>
          <Image
            src="/qli-mascote.png"
            width={500}
            height={500}
            alt="Mascote QLI-MATE"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
