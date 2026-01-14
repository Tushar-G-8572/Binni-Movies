import { useState } from "react";
import AddMovie from "../../pages/admin/AddMovie";
import EditMovie from "../../pages/admin/EditMovie";
import DeleteMovie from "../../pages/admin/DeleteMovie";
import AdminLogout from "../../pages/admin/AdminLogout";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 text-white">

      <aside className="w-full md:w-1/5 bg-black p-4 md:p-6 flex flex-col gap-4">

        <h2 className="text-lg md:text-2xl font-bold text-red-500 text-center md:text-left">
          Admin Panel
        </h2>

        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
          <button
            onClick={() => setActiveTab("add")}
            className={`min-w-max px-4 py-2 rounded text-sm md:text-base
              ${activeTab === "add" ? "bg-red-600" : "hover:bg-gray-800"}`}
          >
            ➕ Add
          </button>

          <button
            onClick={() => setActiveTab("edit")}
            className={`min-w-max px-4 py-2 rounded text-sm md:text-base
              ${activeTab === "edit" ? "bg-red-600" : "hover:bg-gray-800"}`}
          >
            ✏️ Edit
          </button>

          <button
            onClick={() => setActiveTab("delete")}
            className={`min-w-max px-4 py-2 rounded text-sm md:text-base
              ${activeTab === "delete" ? "bg-red-600" : "hover:bg-gray-800"}`}
          >
            🗑️ Delete
          </button>
        </div>

        <div className="pt-2 md:pt-0 md:mt-auto flex justify-center md:justify-start">
          <AdminLogout />
        </div>
      </aside>


      <main className="w-full md:w-4/5 p-4 md:p-8 overflow-y-auto">
        {activeTab === "add" && <AddMovie />}
        {activeTab === "edit" && <EditMovie />}
        {activeTab === "delete" && <DeleteMovie />}
      </main>

    </div>
  );
};

export default AdminDashboard;

