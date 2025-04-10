import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import ListAdm from '@/components/admin/ListAdm'
import { checkAdm } from "@/lib/check-adm"

export default async function Page() {
  const isAdm = await checkAdm()

  if(!isAdm) return redirect('/')

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm space-y-16">
        <ListAdm/>
      </div>
    </div>
  )
}