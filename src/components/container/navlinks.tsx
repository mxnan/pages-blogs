import React from "react";

import Desktopnav from "./desktop-nav";
import Mobilenav from "./mobile-nav";

const Navlinks = () => {
  return (
    <nav className="font-title">
      {/* Desktop navigation links */}
      <div className="hidden sm:block">
        <Desktopnav />
      </div>
      {/* Mobile navigation links */}
      <div className="block sm:hidden">
        <Mobilenav />
      </div>
    </nav>
  );
};

export default Navlinks;
