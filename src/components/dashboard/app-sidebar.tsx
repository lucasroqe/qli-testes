"use client"

import * as React from "react"
import {
  ChartBar,
  Settings2,
  Sun,
  Users
} from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavUser } from "@/components/dashboard/nav-user"
import { TeamSwitcher } from "@/components/dashboard/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "Qli-Mate",
      logo: Sun,
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: ChartBar,
    },
    {
      title: "Settings",
      url: "",
      icon: Settings2,
      items: [
        {
          title: "Gerais",
          url: "/dashboard/settings/general",
        },
        {
          title: "Conta",
          url: "/dashboard/settings/user",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Usuários",
      url: "/dashboard/admin",
      icon: Users,
    },
  ],
}

export function AppSidebar({ isAdm, ...props }: { isAdm: boolean } & React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {isAdm && <NavProjects projects={data.projects} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
