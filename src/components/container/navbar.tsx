import Navlinks from "./navlinks";
import Themebutton from "./theme-toggle";

const Navbar = () => {
  return (
    <>
      {/* Navigation bar */}
      <header className="sticky-nav font-title flex justify-between items-center max-w-4xl w-full p-8 mx-auto bg-opacity-60">
        {/* Dark mode toggle button */}
        <Themebutton />
        <Navlinks />
      </header>
    </>
  );
};

export default Navbar;
