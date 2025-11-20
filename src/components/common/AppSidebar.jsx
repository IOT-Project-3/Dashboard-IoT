import {Home, Settings, User2, ChevronUp} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import {Button} from "@/components/ui/button.jsx"

import { Separator } from "@/components/ui/separator.jsx"

const items_tableau_de_bord = [
    {
        title: "Tout voir",
        url: "/",
        icon: Home,
    },
    {
        title: "Gestion de l'aire",
        url: "/gestion-de-l-aire",
        icon: Home,
    },
    {
        title: "Zone Inondable",
        url: "/zone-inondable",
        icon: Home,
    },

]

const items_utilisateurs = [
    {
        title: "Liste des utilisateurs",
        url: "/liste-utilisateurs",
        icon: User2,
    },
    {
        title: "Création de compte",
        url: "/creation-de-compte",
        icon: User2,
    },
    {
        title: "Gestion des permissions",
        url: "/gestion-permissions",
        icon: User2,
    },
]

const menu2 = [
    {
        title: "Paramètres",
        url: "/parametres",
        icon: Settings,
    },
]

const user_dropdown = [
    {
        title: "Déconnexion",
        url: "/deconnexion"
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>

                <SidebarGroup>

                    <SidebarGroupLabel>
                        IoT - Dashboard
                    </SidebarGroupLabel>

                    <SidebarGroupContent>

                        <SidebarMenu>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/">
                                        <Home />
                                        <span>Tableau de bord</span>
                                    </a>
                                </SidebarMenuButton>

                                <SidebarMenuSub>
                                    { items_tableau_de_bord.map(item => (
                                        <SidebarMenuSubItem key={item.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/">
                                        <User2 />
                                        <span>Utilisateurs</span>
                                    </a>
                                </SidebarMenuButton>

                                <SidebarMenuSub>
                                    { items_utilisateurs.map(item => (
                                        <SidebarMenuSubItem key={item.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </SidebarMenuItem>

                        </SidebarMenu>

                    </SidebarGroupContent>

                </SidebarGroup>

                <Separator></Separator>

                <SidebarGroup>

                    <SidebarGroupContent>

                        <SidebarMenu>
                            { menu2.map(item => (
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

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>

                            <SidebarMenuButton asChild>
                                <DropdownMenuTrigger>
                                    <User2 /> Nom
                                    <ChevronUp className="ml-auto" />
                                </DropdownMenuTrigger>
                            </SidebarMenuButton>

                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                { user_dropdown.map(item=> (
                                    <DropdownMenuItem key={item.title}>
                                        <a href={item.url}>{item.title}</a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}