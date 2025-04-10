"use client"

import * as React from "react"
import {
  ChartBar,
  Settings2,
  Sun,
  Users
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "User",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
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
      url: "#",
      icon: ChartBar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Gerais",
          url: "#",
        },
        {
          title: "Conta",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Usuários",
      url: "#",
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
