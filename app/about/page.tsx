import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "自己紹介",
  description: "アリスの自己紹介ページ。",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Section heading */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #1e2d50, transparent)" }} />
          <span style={{ color: "#c4879a", fontSize: "0.55rem", letterSpacing: "0.2em" }}>◇</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, #1e2d50, transparent)" }} />
        </div>
        <h2
          className="text-xs tracking-[0.3em]"
          style={{ color: "#c4879a" }}
        >
          ABOUT
        </h2>
        <p className="text-xs mt-1" style={{ color: "#4a5a7a", letterSpacing: "0.06em" }}>
          自己紹介
        </p>
      </div>

      {/* Decorative top line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, #c4879a, transparent)",
          marginBottom: "2.5rem",
        }}
      />

      {/* Profile section */}
      <div className="flex items-start gap-6 mb-10">
        {/* Avatar placeholder */}
        <div
          className="shrink-0 flex items-center justify-center text-xl"
          style={{
            width: "80px",
            height: "80px",
            background: "#0b1020",
            border: "1px solid #1e2d50",
            borderRadius: "2px",
            color: "#c4879a",
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.05em",
          }}
        >
          ✦
        </div>

        <div>
          <h1
            className="text-xl font-light mb-1"
            style={{ fontFamily: "var(--font-serif)", color: "#f5ede0", letterSpacing: "0.12em" }}
          >
            アリス
          </h1>
          <p className="text-xs" style={{ color: "#a86b7d", letterSpacing: "0.08em", fontFamily: "var(--font-sans)" }}>
            Alice · ブロガー
          </p>
        </div>
      </div>

      {/* Bio content */}
      <div className="prose-alice space-y-5">
        <p>
          東京在住のブロガーです。テクノロジー、ゲーム、そして社会の動向に関心を持ち、このブログを書いています。
        </p>

        <p>
          扱うテーマは幅広いですが、共通しているのは「調べてから書く」という姿勢です。専門家ではありませんが、一次情報や信頼できるデータをもとに、自分の考えを整理するようにしています。
        </p>

        <div
          style={{
            borderLeft: "2px solid #c4879a",
            paddingLeft: "1.2rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: "#b8a99c", margin: 0, lineHeight: "1.9" }}>
            意見に共感してもらえなくても構いません。<br />
            「こういう見方もある」と感じていただければ、それで十分です。
          </p>
        </div>

        <p>
          記事の内容に誤りがあれば、ご指摘いただけると助かります。正確な情報を届けることを大切にしています。
        </p>
      </div>

      {/* Divider */}
      <div
        className="my-10 flex items-center gap-4"
      >
        <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #1e2d50)" }} />
        <span style={{ color: "#c4879a", fontSize: "0.5rem", letterSpacing: "0.3em" }}>❖</span>
        <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #1e2d50)" }} />
      </div>

      {/* Quick facts */}
      <div>
        <h2
          className="text-xs tracking-[0.25em] mb-6"
          style={{ color: "#c4879a", fontFamily: "var(--font-sans)" }}
        >
          PROFILE
        </h2>
        <dl className="space-y-3">
          {[
            { label: "所在地", value: "東京, 日本" },
            { label: "関心", value: "テクノロジー、ゲーム、読書、コーヒー" },
            { label: "ブログ開始", value: "2026年" },
            { label: "更新頻度", value: "不定期" },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-4 text-sm">
              <dt
                className="shrink-0 w-24 text-xs"
                style={{ color: "#a86b7d", paddingTop: "1px", letterSpacing: "0.05em", fontFamily: "var(--font-sans)" }}
              >
                {label}
              </dt>
              <dd style={{ color: "#b8a99c", fontFamily: "var(--font-sans)" }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
