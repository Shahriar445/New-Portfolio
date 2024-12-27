import React from 'react';

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, onClick = () => {} }) => {
  const baseClasses = "transition-colors duration-300";
  const desktopClasses = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";
  const mobileClasses = "block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;