import Link from "next/link";
import Image from "next/image";

export default function Footer(): JSX.Element {
  return (
    <footer className="body-font">
      <div>
        <div className="h-32 container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
          <p className="md:text-base text-xs text-gray-500 dark:text-gray-400 sm:ml-6 sm:mt-0 mt-4 flex items-center gap-2 whitespace-nowrap">
            © 2025 minhyeok Lee —
            <Link
              href="https://instagram.com/minhyeok.lee1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="inline-block"
              />
              <span className="text-gray-500 dark:text-gray-400 whitespace-nowrap">
                Instagram: @minhyeok.lee1
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
