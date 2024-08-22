import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";

type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

export default function Layout({ children }: ComponentWithChildProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 컴포넌트가 마운트되었을 때 설정
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#111111] h-16 flex items-center justify-center">
        <span className="text-gray-600 dark:text-gray-300">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-priamry">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
}
