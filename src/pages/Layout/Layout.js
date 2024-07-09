import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Layout extends Component {
  render() {
    return (
      <>
        <div className="application">
          <Helmet>
            <script src=""></script>
          </Helmet>
        </div>
        <Outlet />
      </>
    );
  }
}
export default Layout;
