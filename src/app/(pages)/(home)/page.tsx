import React from 'react'
import { Hero } from '@/components/home/Hero'

export default async function page() {

  return (
    <div className="flex min-h-screen flex-col">
      <Hero/>
    </div>
  )
}