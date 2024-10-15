"use client";

import { useState, useEffect } from "react";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import NavLink from "./NavLink";
import Dropdown from "./Dropdown";
import Sidebar from "./sidebar/Sidebar";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  // Detect scroll position and set navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 text-neutral-100 ${
        navbarBackground && !mobileMenuOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {!mobileMenuOpen && (
          <>
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-base font-semibold leading-6">
                  Hystoria
                </span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </>
        )}

        <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Dropdown />
          <NavLink linkTo="#" title="Features" />
          <NavLink linkTo="#" title="Pricing" />
          <NavLink linkTo="#" title="Company" />
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
