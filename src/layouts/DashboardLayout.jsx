import { Outlet } from "react-router-dom"
import {Sidebar} from "@/components/ui/sidebar.jsx";

export default function DashboardLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    )
}