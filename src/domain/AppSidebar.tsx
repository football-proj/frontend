import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  Trophy,
  BarChart3,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// 메뉴 아이템들
const items = [
  {
    title: "홈",
    url: "/",
    icon: Home,
  },
  {
    title: "팀",
    url: "/teams",
    icon: Users,
  },
  {
    title: "경기",
    url: "/matches",
    icon: Trophy,
  },
  {
    title: "통계",
    url: "/stats",
    icon: BarChart3,
  },
  {
    title: "검색",
    url: "/search",
    icon: Search,
  },
  {
    title: "설정",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Football App</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}