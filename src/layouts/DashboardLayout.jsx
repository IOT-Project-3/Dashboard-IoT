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
  const correspondances = {
    admin: {
      // Routes /admin/
      "liste-utilisateurs": "Liste des utilisateurs",
      "creer-compte": "Création d'un compte",
      permissions: "Gestion des permissions",
    },
    // Routes /compte/
    compte: { base: "Votre compte", details: "Paramètres de votre compte" },
    // Routes /
    "zone-inondable": "Zone inondable",
    "gestion-de-l-aire": "Gestion de l'aire",
    dashboard: "Tout voir",
    savon: "Paramètres des savons",
  };

  let tempLocation = location.split("/");
  if (location.includes("compte")) {
    if (!tempLocation[2]) {
      tempLocation[2] = "base";
    }
  }

  if (tempLocation.length > 2) {
    location = correspondances[tempLocation[1]][tempLocation[2]];
  } else {
    location = correspondances[tempLocation[1]];
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
          <span className="font-semibold">{location}</span>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
