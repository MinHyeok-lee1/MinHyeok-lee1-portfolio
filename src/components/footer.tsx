import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="body-font">
      <div>
        <div className="h-32 container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-l text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2025 minhyeok Lee —{" "}
            <a
              href="https://instagram.com/minhyeok.lee1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
            >
              @minhyeok.lee1
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
