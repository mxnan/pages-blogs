import React from "react";

import Desktopnav from "./desktop-nav";
import Mobilenav from "./mobile-nav";

const Navlinks = () => {
  return (
    <>
      {/* Desktop navigation links */}
      <div className="hidden sm:block">
        <Desktopnav />
      </div>

      {/* Mobile navigation links */}
      <div className="block sm:hidden">
        <Mobilenav />
      </div>
    </>
  );
};

export default Navlinks;
