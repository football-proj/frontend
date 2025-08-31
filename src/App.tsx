import {SidebarInset, SidebarProvider, SidebarTrigger} from "./components/ui/sidebar";
import {AppSidebar} from "./domain/AppSidebar";
import TeamContainer from "@/domain/team/TeamContainer.tsx";
import {useEffect} from "react";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import TeamAdd from "@/domain/team/TeamAdd.tsx";

function App() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <ThemeProvider>
            <SidebarProvider>
                <div className="flex h-screen w-full">
                    <AppSidebar/>
                    <SidebarInset className="flex-1">
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger/>
                        </header>
                        <main className="flex-1 overflow-auto p-4">
                            <div>
                                <TeamAdd />
                                <TeamContainer/>
                            </div>
                        </main>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App