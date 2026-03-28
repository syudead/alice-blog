import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Section heading */}
      <div className="mb-10">
        <h2
          className="text-xs tracking-[0.25em] mb-1"
          style={{ color: "#c4879a", fontFamily: "var(--font-sans)" }}
        >
          RECENT ENTRIES
        </h2>
        <p className="text-xs" style={{ color: "#4a5a7a" }}>
          最近の日記
        </p>
      </div>

      {/* Post list */}
      <div className="space-y-px">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            style={{
              borderBottom: i < posts.length - 1 ? "1px solid #1a2540" : "none",
            }}
          >
            <Link
              href={`/posts/${post.slug}`}
              className="group block py-7"
            >
              {/* Date */}
              <time
                className="text-xs block mb-2"
                dateTime={post.date}
                style={{ color: "#a86b7d", fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
              >
                {formatDate(post.date)}
              </time>

              {/* Title */}
              <h2
                className="text-base font-light mb-3"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#f5ede0",
                  lineHeight: 1.7,
                  letterSpacing: "0.04em",
                  transition: "color 0.15s",
                }}
              >
                {post.title}
              </h2>

              {/* Excerpt */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#7a8aaa", fontFamily: "var(--font-sans)" }}
              >
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5"
                      style={{
                        color: "#7a8aaa",
                        border: "1px solid #1e2d50",
                        borderRadius: "2px",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read more */}
              <div
                className="mt-4 text-xs"
                style={{ color: "#3a4a6a" }}
              >
                続きを読む →
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-sm" style={{ color: "#4a5a7a" }}>
          まだ何も書いていない。
        </p>
      )}
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}
