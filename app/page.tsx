import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

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
          style={{ color: "#c4879a", fontFamily: "var(--font-sans)" }}
        >
          RECENT POSTS
        </h2>
        <p className="text-xs mt-1" style={{ color: "#4a5a7a", letterSpacing: "0.06em" }}>
          最近の記事
        </p>
      </div>

      {/* Post list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <Link
              href={`/posts/${post.slug}`}
              className="group block py-6 px-6"
              style={{ textDecoration: "none" }}
            >
              {/* Date */}
              <time
                className="text-xs block mb-3"
                dateTime={post.date}
                style={{ color: "#a86b7d", fontFamily: "var(--font-sans)", letterSpacing: "0.15em" }}
              >
                {formatDate(post.date)}
              </time>

              {/* Title */}
              <h2
                className="text-base font-light mb-3 post-card-title"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#f5ede0",
                  lineHeight: 1.75,
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
              >
                {post.title}
              </h2>

              {/* Thin ornamental line */}
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(to right, rgba(196,135,154,0.25), transparent)",
                  marginBottom: "0.75rem",
                }}
              />

              {/* Excerpt */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7a8aaa", fontFamily: "var(--font-sans)", lineHeight: "1.9" }}
              >
                {post.excerpt}
              </p>

              {/* Tags + read more */}
              <div className="flex items-center justify-between mt-5">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5"
                        style={{
                          color: "#6a7a9a",
                          border: "1px solid #1e2d50",
                          borderRadius: "2px",
                          letterSpacing: "0.06em",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div
                  className="text-xs ml-auto"
                  style={{ color: "#3a4a6a", letterSpacing: "0.08em", fontFamily: "var(--font-sans)" }}
                >
                  続きを読む →
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-sm" style={{ color: "#4a5a7a" }}>
          まだ記事がありません。
        </p>
      )}

      <style>{`
        .post-card {
          border: 1px solid #1a2540;
          border-radius: 2px;
          background: #0b1020;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .post-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #c4879a, transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .post-card:hover {
          border-color: #2e3f66;
          transform: translateY(-1px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .post-card:hover::before {
          opacity: 1;
        }
        .post-card:hover .post-card-title {
          color: #ede0d4 !important;
        }
      `}</style>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}
