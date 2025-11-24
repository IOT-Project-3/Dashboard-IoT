import { Outlet, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar.jsx";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout() {
  let location = useLocation().pathname;
  if (location.includes("admin")) {
    location = location.split("/")[2];
    if (location === "users") {
      location = "Liste des utilisateurs";
    } else if (location === "create-account") {
      location = "Création d'un compte";
    } else if (location === "permissions") {
      location = "Gestion des permissions";
    }
  } else {
    if (location === "/") {
      location = "Tout voir";
    } else if (location === "/gestion-de-l-aire") {
      location = "Gestion de l'aire";
    } else if (location === "/zone-inondable") {
      location = "Zone inondable";
    }
  }
  return (
    <SidebarProvider>
      {/* La Sidebar se met directement dans le Provider */}
      <AppSidebar />

      {/* Le contenu principal va dans SidebarInset */}
      <SidebarInset>
        {/* Header optionnel pour afficher le bouton trigger */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-semibold">Mon Application - {location}</span>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
