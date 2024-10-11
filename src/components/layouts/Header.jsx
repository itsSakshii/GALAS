import Nav from "../ui/Nav";

export default function Header() {
  const navLinks = [
    { path: "/Home", label: "Home" },
    { path: "/Event", label: "Events" },
    { path: "/Vendor", label: "Vendors" },
    { path: "/Services", label: "Services" },
    { path: "/Blog", label: "Blog" },
    { path: "/About", label: "About Us" },
  ];

  const logo = {
    src: "src/assets/image/icons/galas-it-solutions.png",
    alt: "Galas IT Solutions",
  };

  return (
    <>
      <header className="header sticky top-0 left-0 z-50 bg-customGray" role="banner">
        <div className="container mx-auto p-6">
          <div className="header-inner flex justify-between items-center">
            <Nav links={navLinks} logo={logo}  />
          </div>
        </div>
      </header>
      <div className="section-space-inner"></div>
    </>
  );
}

