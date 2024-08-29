import Link from "next/link";
import DarkModeToggleButton from "./darkToggelButton";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "nextra-theme-docs";

export default function Header() {
  // 현재 경로 취득
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <div ref={menuRef}>
        <header className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-40 dark:bg-[#111111]">
          <div className="md:container pl-2 pr-6 mx-auto flex flex-wrap pt-3 pb-3.5 flex-row items-center">
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
              <span
                onClick={router.pathname === "/" ? closeMenu : undefined} // "/"일 때만 메뉴를 닫음
                className={"ml-4 text-l text-[#667180]"}
              >
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
                      onClick={(event) => {
                        event.stopPropagation(); // 이벤트 전파 방지
                        closeMenu(); // 메뉴 닫기만 수행
                      }}
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

          <hr className="dark:border-[#202020] border[##EDEDED] border-t-1" />
        </header>
        {menuOpen && (
          <nav
            className={
              "mt-16 md:hidden fixed top-0 left-0 flex flex-col w-full z-50 bg-white text-black overflow-y-auto dark:bg-black dark:text-white"
            }
          >
            <div className="space-y-1 py-1">
              <Link
                href="/"
                style={
                  router.pathname === "/" && theme === "dark"
                    ? {
                        backgroundColor: "#1a1d24",
                        color: isHovered === "/" ? "white" : "#3ea6ff",
                        fontWeight: "bold",
                        borderRadius: "0.375rem",
                      }
                    : {}
                }
                onMouseEnter={() => setIsHovered("/")}
                onMouseLeave={() => setIsHovered(null)}
                onClick={closeMenu}
                className={`block py-2 px-4 text-sm rounded ${
                  router.pathname === "/" && theme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "hover:bg-gray-100 hover:text-black rounded-md dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
              >
                홈
              </Link>
              <Link
                href="/project"
                style={
                  router.pathname === "/project" && theme === "dark"
                    ? {
                        backgroundColor: "#1a1d24",
                        color: isHovered === "/project" ? "white" : "#3ea6ff",
                        fontWeight: "bold",
                        borderRadius: "0.375rem",
                      }
                    : {}
                }
                onMouseEnter={() => setIsHovered("/project")}
                onMouseLeave={() => setIsHovered(null)}
                onClick={closeMenu}
                className={`block py-2 px-4 text-sm rounded ${
                  router.pathname === "/project" && theme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "hover:bg-gray-100 hover:text-black rounded-md dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
              >
                프로젝트
              </Link>
              <Link
                href="/aboutMe"
                style={
                  router.pathname === "/aboutMe" && theme === "dark"
                    ? {
                        backgroundColor: "#1a1d24",
                        color: isHovered === "/aboutMe" ? "white" : "#3ea6ff",
                        fontWeight: "bold",
                        borderRadius: "0.375rem",
                      }
                    : {}
                }
                onMouseEnter={() => setIsHovered("/aboutMe")}
                onMouseLeave={() => setIsHovered(null)}
                onClick={closeMenu}
                className={`block py-2 px-4 text-sm rounded ${
                  router.pathname === "/aboutMe" && theme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "hover:bg-gray-100 hover:text-black rounded-md dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
              >
                이력서
              </Link>
              <Link
                href="/home"
                style={
                  router.pathname === "/home" && theme === "dark"
                    ? {
                        backgroundColor: "#1a1d24",
                        color: isHovered === "/home" ? "white" : "#3ea6ff",
                        fontWeight: "bold",
                        borderRadius: "0.375rem",
                      }
                    : {}
                }
                onMouseEnter={() => setIsHovered("/home")}
                onMouseLeave={() => setIsHovered(null)}
                onClick={closeMenu}
                className={`block py-2 px-4 text-sm rounded ${
                  router.pathname === "/home" && theme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "hover:bg-gray-100 hover:text-black rounded-md dark:hover:bg-zinc-900 dark:hover:text-white"
                }`}
              >
                문서정리
              </Link>
              <div className="h-0.5"></div>
              <hr className="dark:border-[#202020] border[##EDEDED] border-t-1 mt-10" />
              <div className="border-0 py-2 px-3 w-full bg-white inline-flex items-center rounded my-4 md:mt-0 dark:bg-black">
                <button
                  onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                  }
                  className="flex items-center space-x-1 py-1 rounded transition-colors 
                            duration-200 ease-in-out w-full focus:outline-none text-base
                          bg-white hover:bg-gray-100 text-gray-600 hover:text-red-500
                          dark:bg-black dark:hover:bg-zinc-900 dark:text-slate-400 dark:hover:text-yellow-500"
                >
                  {/* dark mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="visible dark:invisible w-4 h-4 dark:h-0 dark:w-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                  {/* light mode */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="visible dark:invisible w-4 h-4 dark:h-0 dark:w-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                  <span className="pb-0.5">
                    {theme === "dark" ? "Dark" : "Light"}
                  </span>
                </button>
              </div>
            </div>
            <hr className="border[##EDEDED] border-t-1 dark:border-[#202020]" />
          </nav>
        )}
      </div>
    </>
  );
}
