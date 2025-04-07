'use client'
import React from 'react'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-sky-200 text-center font-light text-black">
      <p className="py-2">&copy; Qli-mate 2025. All rights reserved.</p>
      <Image src="/sol.png" width={400} height={400} alt="Mascote QLI-MATE"/>
    </footer>
  )
}
