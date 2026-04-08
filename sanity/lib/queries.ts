import { sanityFetch } from "./live";

export async function getAllArticles() {
  const { data } = await sanityFetch({
    query: `
      *[_type == "article"]{
          _id,
          title,
          slug,
          datePublished,
          "author": author->name,
          "tags": tags[]->name
      } | order(datePublished desc)
    `});
  return data;
}

export async function getArticleBySlug(slug: string) {
  const { data } = await sanityFetch({
    query: `
      *[_type == "article" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        datePublished,
        body,
        "author": author->name,
        "tags": tags[]->name
      }
    `,
    params: { slug }
  });
  return data;
}
