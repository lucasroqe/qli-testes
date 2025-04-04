import React from 'react'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
// import { useRouter } from "next/navigation";

// const router = useRouter()

function logOut() {
  authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        // router.push('/')
        console.log('Deslogado!');
      },
    },
  })
}

export default function page() {
  return (
    <div>
      <Button onClick={() => logOut()}></Button>
    </div>
  )
}
