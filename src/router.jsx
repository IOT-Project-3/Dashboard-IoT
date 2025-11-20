import { createBrowserRouter } from "react-router-dom"

import PublicLayout from "./layouts/PublicLayout"
import DashboardLayout from "./layouts/DashboardLayout"

import Login from "./pages/Login"
import Decouverte from "./pages/Decouverte"
import GestionAire from "./pages/GestionAire"
import Savon from "./pages/Savon"
import ToutVoir from "./pages/ToutVoir.jsx"
import ZoneInondable from "./pages/ZoneInondable"
import CreationsCompte from "@/pages/CreationsCompte.jsx";
import Account from "@/pages/Account.jsx";
import Users from "@/pages/Users.jsx";
import DetailsAccount from "@/pages/DetailsAccount.jsx";
import GestionPermissions from "@/pages/GestionPermissions.jsx";
import ForgotPassword from "@/pages/ForgotPassword.jsx";


// Explication :
// On différencie les routes avec et sans sidebar
// On a les deux layouts qui correspondent
// On précise l'élément (le layout) et ses enfants c'est à dire les pages qui vont correspondre a ce layout
// Layout public (sans sidebar) children -> config
// = pas de sidebar dans le login

const router = createBrowserRouter([
    // ---
    // Routes publiques (sans sidebar)
    // ---
    {
        element: <PublicLayout />,
        children: [
            { path: "/connexion", element: <Login /> },
            { path: "/decouverte", element: <Decouverte /> },
            { path: "/mot-de-passe-oublie", element: <ForgotPassword />},
        ],
    },

    // ---
    // Routes dashboard (avec sidebar)
    // ---
    {
        element: <DashboardLayout />,
        children: [
            { path: "/", element: <ToutVoir /> },
            { path: "/gestion-aire", element: <GestionAire /> },
            { path: "/savon", element: <Savon /> },
            { path: "/zone-inondable", element: <ZoneInondable /> },
            { path: "/account", element: <Account />},
            { path: "/account/details", element: <DetailsAccount />},
            { path: "/admin/users", element: <Users />},
            { path: "/admin/create-account", element: <CreationsCompte />},
            { path: "/admin/permissions", element: <GestionPermissions />},
        ],
    },

])

export default router