import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarHeader,
    SidebarFooter,
    SidebarTrigger,
    SidebarProvider,
} from "@/components/ui/sidebar";

import { ChevronRight, User, Settings, Layers, FileText, Users } from "lucide-react";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader />
            <SidebarContent>
                {/* Tableau de bord */}
                <SidebarGroup>
                    <SidebarGroupLabel>Tableau de bord</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/">
                                        <ChevronRight />
                                        <span>Tout voir</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/gestion-aire">
                                        <ChevronRight />
                                        <span>Gestion de l'aire</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/zone-inondable">
                                        <ChevronRight />
                                        <span>Zone inondable</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/savon">
                                        <ChevronRight />
                                        <span>Savon</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Utilisateurs */}
                <SidebarGroup>
                    <SidebarGroupLabel>Utilisateurs</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/admin/users">
                                        <ChevronRight />
                                        <span>Liste des utilisateurs</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/admin/create-account">
                                        <ChevronRight />
                                        <span>Création de compte</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/admin/permissions">
                                        <ChevronRight />
                                        <span>Gestion des permissions</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Paramètres */}
                <SidebarGroup>
                    <SidebarGroupLabel>Paramètres</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="/account">
                                        <User />
                                        <span>Nom utilisateur</span>
                                    </a>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubButton asChild>
                                        <a href="/account/details">
                                            <ChevronRight />
                                            <span>Détails du compte</span>
                                        </a>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}

// Dans ton layout principal
export default function Layout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}
