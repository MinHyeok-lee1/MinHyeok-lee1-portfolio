import Link from "next/link";
import DarkModeToggleButton from "./darkToggelButton";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { useTheme } from "nextra-theme-docs";
import type { MutableRefObject } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface CloseIconProps {
  onClick: (event: MouseEvent<SVGSVGElement>) => void;
}

interface MobileMenuProps {
  navItems: NavItem[];
  theme: string;
  isHovered: string | null;
  setIsHovered: (href: string | null) => void;
  isCurrent: (path: string) => boolean;
  setTheme: (theme: string) => void;
  closeMenu: () => void;
}

const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/project", label: "프로젝트" },
  { href: "/til", label: "TIL문서" },
  { href: "/docs", label: "문서정리" },
];

export default function Header(): JSX.Element {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const isCurrent = (path: string) => router.pathname === path;

  const renderLinkClass = (href: string) =>
    isCurrent(href) ? "mr-5 text-gray-900" : "mr-5 hover:text-gray-900";

  return (
    <div ref={menuRef}>
      <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-40 dark:bg-[#111111]">
        <div className="md:container pl-2 pr-6 mx-auto flex flex-wrap pt-3 pb-3.5 items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <span
              onClick={isCurrent("/") ? () => setMenuOpen(false) : undefined}
              className="ml-4 text-l text-[#667180]"
            >
              <strong>개발새발</strong>
            </span>
          </Link>

          <nav className="ml-auto flex items-center text-base">
            <div className="hidden md:flex">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={renderLinkClass(href)}
                  onClick={(e) => {
                    if (router.pathname === href) {
                      e.preventDefault();
                    }
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="md:hidden pt-2">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <CloseIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                    }}
                  />
                ) : (
                  <MenuIcon />
                )}
              </button>
            </div>
          </nav>

          <span className="hidden md:flex">
            <DarkModeToggleButton />
          </span>
        </div>
        <hr className="dark:border-[#202020] border-[#EDEDED] border-t" />
      </header>

      {menuOpen && (
        <MobileMenu
          navItems={navItems}
          theme={theme}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isCurrent={isCurrent}
          setTheme={setTheme}
          closeMenu={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}

function MenuIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon({ onClick }: CloseIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function MobileMenu({
  navItems,
  theme,
  isHovered,
  setIsHovered,
  isCurrent,
  setTheme,
  closeMenu,
}: MobileMenuProps): JSX.Element {
  return (
    <nav className="mt-16 md:hidden fixed top-0 left-0 w-full z-50 bg-white text-black overflow-y-auto dark:bg-black dark:text-white">
      <div className="space-y-1 py-1">
        {navItems.map(({ href, label }) => {
          const isActive = isCurrent(href);
          const darkStyle =
            isActive && theme === "dark"
              ? {
                  backgroundColor: "#1a1d24",
                  color: isHovered === href ? "white" : "#3ea6ff",
                  fontWeight: "bold",
                  borderRadius: "0.375rem",
                }
              : {};
          const className = `block py-2 px-4 text-sm rounded ${
            isActive && theme !== "dark"
              ? "bg-blue-100 text-blue-700 font-bold"
              : "hover:bg-gray-100 hover:text-black rounded-md dark:hover:bg-zinc-900 dark:hover:text-white"
          }`;
          return (
            <Link
              key={href}
              href={href}
              style={darkStyle}
              onMouseEnter={() => setIsHovered(href)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={closeMenu}
              className={className}
            >
              {label}
            </Link>
          );
        })}

        <div className="border-0 py-2 px-3 w-full bg-white inline-flex items-center rounded my-4 dark:bg-black">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex items-center space-x-1 py-1 w-full focus:outline-none text-base bg-white hover:bg-gray-100 text-gray-600 hover:text-red-500 dark:bg-black dark:hover:bg-zinc-900 dark:text-slate-400 dark:hover:text-yellow-500"
          >
            <LightModeIcon />
            <DarkModeIcon />
            <span className="pb-0.5">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function LightModeIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="visible w-4 h-4 dark:invisible dark:h-0 dark:w-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
}

function DarkModeIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="invisible w-0 h-0 dark:visible dark:h-4 dark:w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
}
