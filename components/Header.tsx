import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(180deg, #080c1a 0%, #0d1224 100%)",
        borderBottom: "1px solid #1e2d50",
      }}
    >
      {/* Top decorative strip */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(to right, transparent, #c4879a, #a86b7d, #c4879a, transparent)",
        }}
      />

      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Blog title */}
        <div className="text-center mb-6">
          <Link href="/" className="block no-underline">
            <div
              className="text-xs mb-2"
              style={{ color: "#c4879a", letterSpacing: "0.3em", fontFamily: "var(--font-sans)" }}
            >
              ✦ ALICE&apos;S DIARY ✦
            </div>
            <h1
              className="text-3xl font-light"
              style={{
                fontFamily: "var(--font-serif)",
                color: "#f5ede0",
                letterSpacing: "0.15em",
              }}
            >
              アリスの日記帳
            </h1>
            <div
              className="text-xs mt-2"
              style={{ color: "#b8a99c", letterSpacing: "0.1em" }}
            >
              不思議の国からやってきた、私の記録
            </div>
          </Link>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #1e2d50)" }} />
          <span style={{ color: "#c4879a", fontSize: "0.6rem" }}>◆◇◆</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #1e2d50)" }} />
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8">
          <Link
            href="/"
            className="nav-link text-sm"
            style={{ color: "#b8a99c", letterSpacing: "0.12em", textDecoration: "none" }}
          >
            日記
          </Link>
          <Link
            href="/about"
            className="nav-link text-sm"
            style={{ color: "#b8a99c", letterSpacing: "0.12em", textDecoration: "none" }}
          >
            自己紹介
          </Link>
        </nav>
      </div>

      <style>{`
        .nav-link:hover {
          color: #c4879a !important;
        }
      `}</style>
    </header>
  );
}
