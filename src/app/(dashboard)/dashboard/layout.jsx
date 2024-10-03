import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <nav className="bg-blue-400">Dashboard Layout</nav>
      {children}
      <footer className="bg-blue-400">This is Dashboard Footer.</footer>
    </div>
  );
};

export default DashboardLayout;
