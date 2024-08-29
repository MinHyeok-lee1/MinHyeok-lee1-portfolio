import { useTheme } from "next-themes";

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        className="inline-flex items-center 
        rounded text-base mt-4 md:mt-0
        bg-gray-100 border-0 py-1 px-3 focus:outline-none 
        hover:text-red-500
        hover:bg-gray-50
        dark:bg-slate-600
        dark:text-slate-400
        dark:hover:bg-slate-700
        dark:hover:text-yellow-500"
      >
        {/* dark mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="visible dark:invisible dark:h-0 dark:w-0 w-6 h-6"
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
          className="invisible dark:visible dark:w-6 dark:h-6 h-0 w-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </>
  );
}
