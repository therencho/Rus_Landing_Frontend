"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { SIGN_IN_URL, WAITLIST_URL } from "@/lib/config";

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {/* relative z-20 lifts this cluster above NavItems' `absolute inset-0`
              overlay, which would otherwise intercept clicks on the toggle/buttons */}
          <div className="relative z-20 flex items-center gap-3">
            <ThemeToggle />
            <NavbarButton as="a" href={SIGN_IN_URL} variant="secondary">
              Sign In
            </NavbarButton>
            <NavbarButton
              as="a"
              href={WAITLIST_URL}
              variant="primary"
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              Sign Up
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                as="a"
                href={SIGN_IN_URL}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Sign In
              </NavbarButton>
              <NavbarButton
                as="a"
                href={WAITLIST_URL}
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
              >
                Sign Up
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
