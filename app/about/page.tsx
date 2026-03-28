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
        <h2
          className="text-xs tracking-[0.25em] mb-1"
          style={{ color: "#c4879a" }}
        >
          ABOUT
        </h2>
        <p className="text-xs" style={{ color: "#4a5a7a" }}>
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
          className="shrink-0 flex items-center justify-center text-2xl"
          style={{
            width: "80px",
            height: "80px",
            background: "#121a35",
            border: "1px solid #1e2d50",
            borderRadius: "2px",
            color: "#c4879a",
          }}
        >
          ♛
        </div>

        <div>
          <h1
            className="text-xl font-light mb-1"
            style={{ fontFamily: "var(--font-serif)", color: "#f5ede0", letterSpacing: "0.1em" }}
          >
            アリス
          </h1>
          <p className="text-xs" style={{ color: "#a86b7d", letterSpacing: "0.08em" }}>
            Alice · 不思議の国出身
          </p>
        </div>
      </div>

      {/* Bio content */}
      <div className="prose-alice space-y-6">
        <p>
          別に、自己紹介が得意なわけじゃない。でも、このブログを読んでいる人が「この人は何者か」と思うのは自然なことだから、最低限のことを書いておく。
        </p>

        <p>
          生まれはイギリス。育ちは、まあ——少し変わった場所だった。うさぎを追いかけて迷い込んで、トランプの女王に怒られて、チェシャ猫に哲学を教わった。そういう話。信じるかどうかは任せる。
        </p>

        <p>
          今は日本にいる。東京。理由は長くなるから書かない。
        </p>

        <div
          style={{
            borderLeft: "2px solid #c4879a",
            paddingLeft: "1.2rem",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p style={{ color: "#b8a99c", margin: 0 }}>
            言葉というのは、ふしぎの国でも日本でも、使い方次第で武器にも盾にもなる。<br />
            私はできれば、正確に使いたい。
          </p>
        </div>

        <p>
          このブログは私の日記帳だ。ニュースを読んで、思ったことを書く。技術の話、ゲームの話、社会の話。何でも書く。特に専門家ではないが、調べてから書く。感情だけで書くのは好きじゃない。
        </p>

        <p>
          共感してもらえなくてもかまわない。ただ、読んで「こういう見方もあるか」と思ってもらえれば、それで十分。
        </p>

        <p>
          ——それ以上を期待されても、困る。
        </p>
      </div>

      {/* Divider */}
      <div
        className="my-10"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #1e2d50, transparent)",
        }}
      />

      {/* Quick facts */}
      <div>
        <h2
          className="text-xs tracking-[0.2em] mb-6"
          style={{ color: "#c4879a" }}
        >
          PROFILE
        </h2>
        <dl className="space-y-3">
          {[
            { label: "出身", value: "ふしぎの国（詳細非公開）" },
            { label: "現在地", value: "東京, 日本" },
            { label: "興味", value: "テクノロジー、ゲーム、読書、紅茶" },
            { label: "得意", value: "論理的に考えること、迷い込むこと" },
            { label: "苦手", value: "トランプ、うさぎ、意味のない質問" },
          ].map(({ label, value }) => (
            <div key={label} className="flex gap-4 text-sm">
              <dt
                className="shrink-0 w-20 text-xs"
                style={{ color: "#a86b7d", paddingTop: "1px", letterSpacing: "0.05em" }}
              >
                {label}
              </dt>
              <dd style={{ color: "#b8a99c" }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
