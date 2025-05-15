import Header from "./header";
import Footer from "./footer";
import { useEffect, useState, type ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  example?: string;
};

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#111111] transition-colors duration-300">
        <div className="flex flex-col items-center space-y-4">
          <svg
            className="animate-spin h-10 w-10 text-blue-500 dark:text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            ></path>
          </svg>

          <span className="text-lg font-medium text-gray-700 dark:text-gray-300 tracking-wide">
            페이지를 불러오는 중입니다...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary">
      {" "}
      {/* bg-priamry → bg-primary 오타 수정 */}
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
