import { Home, Settings, User2, ChevronUp } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator.jsx";
import { useAuth } from "@/context/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const items_tableau_de_bord = [
  {
    title: "Tout voir",
    url: "/dashboard",
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
];

const items_utilisateurs = [
  {
    title: "Liste des utilisateurs",
    url: "/admin/liste-utilisateurs",
    icon: User2,
  },
  {
    title: "Création de compte",
    url: "/admin/creer-compte",
    icon: User2,
  },
  {
    title: "Gestion des permissions",
    url: "/admin/permissions",
    icon: User2,
  },
];

const user_dropdown = [
  {
    title: "Compte",
    url: "/compte/",
    icon: Settings,
  },
  {
    title: "Paramètres du compte",
    url: "/compte/details",
    icon: Settings,
  },
  {
    title: "Déconnexion",
    url: "DECO",
  },
];

export function AppSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  function deconnexion() {
    logout();
    navigate("/");
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>IoT - Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div>
                    <Home />
                    <span>Tableau de bord</span>
                  </div>
                </SidebarMenuButton>

                <SidebarMenuSub>
                  {items_tableau_de_bord.map((item) => (
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
                  <div>
                    <User2 />
                    <span>Utilisateurs</span>
                  </div>
                </SidebarMenuButton>

                <SidebarMenuSub>
                  {items_utilisateurs.map((item) => (
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
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <SidebarMenuButton asChild>
                <DropdownMenuTrigger>
                  <User2 />
                  <span className="ml-2">
                    {" "}
                    {user?.prenom} {user?.nom}{" "}
                  </span>
                  <ChevronUp className="ml-auto" />
                </DropdownMenuTrigger>
              </SidebarMenuButton>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                {user_dropdown.map((item) => {
                  if (item.url === "DECO") {
                    return (
                      <DropdownMenuItem key={item.title}>
                        <p onClick={() => deconnexion()}>{item.title}</p>
                      </DropdownMenuItem>
                    );
                  } else {
                    return (
                      <DropdownMenuItem key={item.title}>
                        <a href={item.url}>{item.title}</a>
                      </DropdownMenuItem>
                    );
                  }
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
