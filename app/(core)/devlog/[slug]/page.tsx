import SanityPortableText from "@/components/sanity/PortableText";
import { getArticleBySlug } from "@/sanity/lib/queries";

export default async function DevlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return (
    <div className="py-4 px-8">
      <h1 className="text-4xl font-bold">{article?.title ?? "Untitled"}</h1>
      <p className="mt-2 mb-6 text-gray-600">
        Published on {article?.datePublished ? new Date(article.datePublished).toLocaleDateString() : "Unknown date"} by {(article?.author as string) ?? "Unknown author"}
      </p>

      <SanityPortableText body={article?.body ?? []} />
    </div>
  );
}
