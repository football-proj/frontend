import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Football App</h1>
        </div>
        <div className="p-4">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}