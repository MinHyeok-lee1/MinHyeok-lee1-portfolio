import { Link } from "nextra-theme-docs";

export default function Custom404(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-800">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">페이지를 찾을 수가 없어요</p>
      <p className="text-sm mb-6">
        아래 버튼을 눌러 홈으로 돌아가거나, 이전 페이지로 이동할 수 있습니다.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <button className="px-6 py-2 bg-slate-600 text-white rounded hover:bg-slate-700 transition">
            홈으로
          </button>
        </Link>
        <button
          className="px-6 py-2 bg-slate-400 text-white rounded hover:bg-slate-500 transition"
          onClick={() => window.history.back()}
        >
          이전 페이지로
        </button>
      </div>
    </div>
  );
}
