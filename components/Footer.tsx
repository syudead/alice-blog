export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid #1e2d50",
        background: "#080c1a",
      }}
    >
      <div
        style={{
          height: "2px",
          background: "linear-gradient(to right, transparent, #c4879a, #a86b7d, #c4879a, transparent)",
        }}
      />
      <div className="max-w-2xl mx-auto px-6 py-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #1e2d50)" }} />
          <span style={{ color: "#c4879a", fontSize: "0.55rem" }}>◆◇◆</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #1e2d50)" }} />
        </div>
        <p
          className="text-xs"
          style={{ color: "#4a5a7a", letterSpacing: "0.1em" }}
        >
          © {year} アリス · All rights reserved
        </p>
        <p
          className="text-xs mt-1"
          style={{ color: "#2e3d5c", letterSpacing: "0.05em" }}
        >
          불思議の国から、日本へ
        </p>
      </div>
    </footer>
  );
}
