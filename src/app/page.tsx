import React from 'react'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Signout from './signout'
import { HeroHighlightDemo } from '@/components/home/HeroHighlightDemo'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'

export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <>
      <Header/>
      <HeroHighlightDemo/>
      <Footer/>
      <Signout></Signout>

      {!session ? "Não logado": "Logado"}
    </>
  )
}