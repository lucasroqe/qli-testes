import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import ListAdm from '@/components/admin/ListAdm'
import { checkAdm } from "@/lib/check-adm"

export default async function Page() {
  const isAdm = await checkAdm()

  if(!isAdm) return redirect('/dashboard')

  return <ListAdm/>
}