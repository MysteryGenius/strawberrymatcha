import { Article } from "@/sanity.types";
import { getAllArticles } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function DevlogPage() {
  const articles = await getAllArticles();

  return (
    <main className="py-4 px-8">
      <h1 className="text-4xl font-bold">Devlog</h1>

      <ul className="mt-6 space-y-4 w-full">
        {articles.map((article: Article) => (
          <Link key={article._id} href={`/devlog/${article.slug?.current}`} className="flex justify-between">
            <h2 className="text-2xl font-semibold hover:underline">{article.title ?? "Untitled"}</h2>
            <p className="text-sm text-gray-500">
              Published on {article.datePublished ? new Date(article.datePublished).toLocaleDateString() : "Unknown date"} by {(article.author as unknown as string) ?? "Unknown author"}
            </p>
          </Link>
        ))}
      </ul>
    </main>
  );
}
