import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import Link from "next/link";
import MarkdownContent from "@/components/MarkdownContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = getPost(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="inline-block text-xs mb-10"
        style={{ color: "#4a5a7a", letterSpacing: "0.1em" }}
      >
        ← 記事一覧に戻る
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <time
          className="text-xs block mb-3"
          dateTime={meta.date}
          style={{ color: "#a86b7d", letterSpacing: "0.12em" }}
        >
          {formatDate(meta.date)}
        </time>

        <h1
          className="text-xl font-light mb-4"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#f5ede0",
            lineHeight: 1.8,
            letterSpacing: "0.05em",
          }}
        >
          {meta.title}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-3" style={{ marginTop: "1.5rem" }}>
          <div
            style={{
              height: "1px",
              flex: 1,
              background: "linear-gradient(to right, #c4879a, transparent)",
            }}
          />
          <span style={{ color: "rgba(196,135,154,0.5)", fontSize: "0.5rem" }}>✦</span>
        </div>
      </header>

      {/* Post content */}
      <MarkdownContent content={content} />

      {/* Tags */}
      {meta.tags && meta.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid #1a2540" }}>
          {meta.tags.map((tag) => (
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

      {/* Back link bottom */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-xs"
          style={{ color: "#4a5a7a", letterSpacing: "0.1em" }}
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}
