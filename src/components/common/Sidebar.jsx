// src/components/common/Sidebar.jsx
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>Tout Voir</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gestion-aire" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>Gestion Aire</NavLink>
                    </li>
                    <li>
                        <NavLink to="/savon" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>Savon</NavLink>
                    </li>
                    <li>
                        <NavLink to="/zone-inondable" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>Zone Inondable</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
