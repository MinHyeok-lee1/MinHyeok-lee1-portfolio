import Link from "next/link";
import DarkModeToggleButton from "./darkToggelButton";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useTheme } from "nextra-theme-docs";

export default function Header() {
  // 현재 경로 취득
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); // 메뉴 외부 클릭 시 메뉴 닫기
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-0"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-4 text-l">
              <strong>개발새발</strong>
            </span>
          </Link>
          {/* mobile menu items */}

          <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="hidden md:flex">
              <Link
                href="/"
                className={
                  router.pathname === "/"
                    ? "mr-5 text-gray-900"
                    : "mr-5 hover:text-gray-900"
                }
              >
                홈
              </Link>
              <Link
                href="/project"
                className={
                  router.pathname === "/project"
                    ? "mr-5 text-gray-900"
                    : "mr-5 hover:text-gray-900"
                }
              >
                프로젝트
              </Link>
              <Link
                href="/aboutMe"
                className={
                  router.pathname === "/aboutMe"
                    ? "mr-5 text-gray-900"
                    : "mr-5 hover:text-gray-900"
                }
              >
                이력서
              </Link>
              <Link href="/home" className="mr-5 hover:text-gray-900">
                문서정리
              </Link>
            </div>

            {/* mobile menu */}
            <div className="md:hidden pt-2">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </nav>
          <span className="hidden md:flex">
            <DarkModeToggleButton />
          </span>
        </div>
        <hr />
      </header>
      {menuOpen && (
        <nav
          className={`md:hidden fixed flex flex-col  w-full z-10 ${
            resolvedTheme === "dark" ? "bg-black" : "bg-gray-50"
          }`}
        >
          <div ref={menuRef}>
            <Link
              href="/"
              className={`router.pathname === "/"
            ? "mr-5 text-gray-900"
            : "mr-5 hover:text-gray-900" block py-2 px-4 text-sm ${
              resolvedTheme === "dark"
                ? "hover:bg-neutral-900"
                : "hover:bg-gray-200"
            }`}
            >
              홈
            </Link>
            <Link
              href="/project"
              className={`router.pathname === "/"
              ? "mr-5 text-gray-900"
              : "mr-5 hover:text-gray-900" block py-2 px-4 text-sm ${
                resolvedTheme === "dark"
                  ? "hover:bg-neutral-900"
                  : "hover:bg-gray-200"
              }`}
            >
              프로젝트
            </Link>
            <Link
              href="/aboutMe"
              className={`router.pathname === "/"
            ? "mr-5 text-gray-900"
            : "mr-5 hover:text-gray-900" block py-2 px-4 text-sm ${
              resolvedTheme === "dark"
                ? "hover:bg-neutral-900"
                : "hover:bg-gray-200"
            }`}
            >
              이력서
            </Link>
            <Link
              href="/home"
              className={`router.pathname === "/"
            ? "mr-5 text-gray-900"
            : "mr-5 hover:text-gray-900" block py-2 px-4 text-sm ${
              resolvedTheme === "dark"
                ? "hover:bg-neutral-900"
                : "hover:bg-gray-200"
            }`}
            >
              문서정리
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
