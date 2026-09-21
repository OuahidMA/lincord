import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import {
  Navbar as NavbarShell,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/Components/ui/resizable-navbar";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
];

const Logo = () => (
  <NavLink
    to="/"
    className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1"
  >
    <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md ring-1 ring-white/20">
      <img src="/2.png" alt="Lincord" className="h-full w-full object-cover" />
    </span>
    <span className="text-sm font-semibold tracking-tight text-white">
      Lincord
    </span>
  </NavLink>
);

const QuoteButton = ({ className, onQuoteClick }) => (
  <NavbarButton
    as="button"
    type="button"
    variant="primary"
    onClick={onQuoteClick}
    className={className}
  >
    Get a Quote
  </NavbarButton>
);

const NavLinks = ({ onNavigate }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex"
    >
      {navItems.map((item, idx) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          onClick={onNavigate}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2 text-neutral-400 transition-colors duration-200 hover:text-white"
        >
          {({ isActive }) => (
            <>
              {hovered === idx && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 h-full w-full rounded-full bg-neutral-800/70"
                />
              )}
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 h-full w-full rounded-full bg-red-600/15 ring-1 ring-red-500/30"
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </motion.div>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <NavbarShell>
        <NavBody>
          <Logo />
          <NavLinks />
          <div className="flex items-center gap-4">
            <QuoteButton className="bg-red-600 text-white shadow-[0_0_24px_rgba(220,38,38,0.4)] hover:bg-red-700" />
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <Logo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative w-full text-neutral-400"
              >
                {({ isActive }) => (
                  <span
                    className={
                      isActive ? "block text-red-400" : "block text-neutral-300"
                    }
                  >
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
            <div className="flex w-full flex-col gap-4">
              <QuoteButton
                onQuoteClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-red-600 text-white hover:bg-red-700"
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarShell>
    </div>
  );
}