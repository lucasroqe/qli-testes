'use client'

import React from 'react'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'

export default function Signout() {
  return (
    <Button onClick={() => authClient.signOut()}>Deslogar</Button>
  )
}
