import { Outlet } from "react-router-dom";
import Sidebar from "@/components/common/Sidebar";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="p-6" style={{ minWidth: "900px" }}>
        <Outlet />
      </main>
    </div>
  );
}
