import { Article } from "@/sanity.types";
import { getAllArticles } from "@/sanity/lib/queries";

export default async function DevlogPage() {
  const articles = await getAllArticles();

  return (
    <main className="py-4 px-8">
      <h1 className="text-4xl font-bold">Devlog</h1>

      <ul className="mt-6 space-y-4">
        {articles.map((article: Article) => (
          <li key={article._id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">{article.title ?? "Untitled"}</h2>
            <p className="text-sm text-gray-500">
              Published on {article.datePublished ? new Date(article.datePublished).toLocaleDateString() : "Unknown date"} by Unknown author
            </p>
            <div className="mt-2 flex gap-2">
              {article.tags?.map((tag) => (
                <span key={tag._key} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  Reference: {tag._ref}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
