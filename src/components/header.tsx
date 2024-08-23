import Link from "next/link";
import DarkModeToggleButton from "./darkToggelButton";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "nextra-theme-docs";

export default function Header() {
  // 현재 경로 취득
  const router = useRouter();
  const { resolvedTheme } = useTheme();
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
        <header
          className={`text-gray-600 body-font fixed top-0 left-0 w-full ${
            resolvedTheme === "dark" ? "bg-[#111111]" : "bg-white"
          } z-40`}
        >
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

          <hr
            className={`${
              resolvedTheme === "dark" ? "border-[#202020]" : "border[##EDEDED]"
            } border-t-1`}
          />
        </header>
        {menuOpen && (
          <nav
            className={`mt-16 md:hidden fixed top-0 left-0 flex flex-col w-full z-50 ${
              resolvedTheme === "dark"
                ? "bg-black text-white"
                : "bg-white text-black"
            } overflow-y-auto`}
          >
            <div className="space-y-1 py-1">
              <Link
                href="/"
                style={
                  router.pathname === "/" && resolvedTheme === "dark"
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
                  router.pathname === "/" && resolvedTheme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : resolvedTheme === "dark"
                    ? "hover:bg-neutral-900 hover:text-white rounded-md"
                    : "hover:bg-gray-100 hover:text-black rounded-md"
                }`}
              >
                홈
              </Link>
              <Link
                href="/project"
                style={
                  router.pathname === "/project" && resolvedTheme === "dark"
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
                  router.pathname === "/project" && resolvedTheme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : resolvedTheme === "dark"
                    ? "hover:bg-neutral-900 hover:text-white rounded-md"
                    : "hover:bg-gray-100 hover:text-black rounded-md"
                }`}
              >
                프로젝트
              </Link>
              <Link
                href="/aboutMe"
                style={
                  router.pathname === "/aboutMe" && resolvedTheme === "dark"
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
                  router.pathname === "/aboutMe" && resolvedTheme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : resolvedTheme === "dark"
                    ? "hover:bg-neutral-900 hover:text-white rounded-md"
                    : "hover:bg-gray-100 hover:text-black rounded-md"
                }`}
              >
                이력서
              </Link>
              <Link
                href="/home"
                style={
                  router.pathname === "/home" && resolvedTheme === "dark"
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
                  router.pathname === "/home" && resolvedTheme !== "dark"
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : resolvedTheme === "dark"
                    ? "hover:bg-neutral-900 hover:text-white rounded-md"
                    : "hover:bg-gray-100 hover:text-black rounded-md"
                }`}
              >
                문서정리
              </Link>
            </div>

            <hr
              className={`${
                resolvedTheme === "dark"
                  ? "border-[#202020]"
                  : "border[##EDEDED]"
              } border-t-1`}
            />
          </nav>
        )}
      </div>
    </>
  );
}
