import { useState } from "react";
import { supabase } from "../components/supabase/Supabase";

export default function Header({ activeTab, setActiveTab, user, setUser, setRole }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "directory", label: "Assessors Directory" },
    { id: "smv", label: "SMV Profiling" },
    { id: "qrrpa", label: "QRRPA Submission" },
  ];

  const handleLogout = async () => {
    try {
      // 1. Clear application state FIRST
      localStorage.clear();
      sessionStorage.clear();
      setUser?.(null);
      setRole?.(null);

      // 2. Perform Supabase logout
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout error:", error.message);
        return;
      }

      console.log("Successfully logged out");

      // 3. Force full session reset
      await supabase.auth.api.deleteAuthCookies(); // Extra cookie cleanup

      // 4. Redirect to login page with cache-busting
      window.location.href = '/login';
 
    } catch (err) {
      console.error("Unexpected error during logout:", err);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://blgf.gov.ph/wp-content/uploads/2022/05/BLGF-Seal-Regular.png"
            alt="BLGF Logo"
            className="h-12 blgf-logo"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">James Bryan</h1>
            <p className="text-sm text-gray-600">
              Real Estate Appraiser & Civil Service Professional
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition ${activeTab === item.id ? "bg-primary text-gray-900" : ""
                }`}
            >
              {item.label}
            </button>
          ))}

          {user && (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col space-y-1 p-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition text-left ${activeTab === item.id ? "bg-primary text-gray-900" : ""
                  }`}
              >
                {item.label}
              </button>
            ))}

            {user && (
              <>
                <hr className="my-2" />
                <div className="px-4 py-2 text-sm font-medium text-gray-700">
                  {user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-left px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
