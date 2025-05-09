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
    setMounted(true); // 클라이언트 사이드에서 마운트 확인
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#111111] h-16 flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-primary"> {/* bg-priamry → bg-primary 오타 수정 */}
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
