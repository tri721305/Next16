import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="h1-bold">DashboardLayout</h1>
      <h1 className="h1-bold font-inter">DashboardLayout</h1>

      {children}
    </div>
  );
};

export default DashboardLayout;
