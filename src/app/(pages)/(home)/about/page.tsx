import { About } from '@/components/home/About'
import React from 'react'

export default async function page() {

  return (
    <div className="flex min-h-screen flex-col">
      <About/>
    </div>
  )
}