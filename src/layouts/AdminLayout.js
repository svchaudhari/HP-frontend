import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Header />
            {/* Begin Page Content */}
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
