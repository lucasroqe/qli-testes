import React from 'react'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Signout from './signout'



export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <div>
      <p>
        <Signout></Signout>
        <br />
        {!session ? "Não logado": "Logado"}
      </p>
    </div>
  )
}
