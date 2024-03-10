import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostFromUrlSlug } from "./api";
import componentConfig from "./componentConfig";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Get the content and metadata for a blog post. Note that this function is called by both the page
 * and the metadata generation functions. It may seem like making two requests, but keep in mind
 * that NextJS caches the request via request memoization.
 *
 * Read more here:
 * - https://www.reddit.com/r/nextjs/comments/15kjrwb/dynamic_metadata_in_nextjs13/
 * - https://nextjs.org/docs/app/building-your-application/caching#request-memoization
 *
 * @param {string} slug The URL slug of the post.
 *
 * @returns {Promise<{ content: string, metadata: Post }>} A promise that resolves to an object containing the post content and metadata.
 */
async function getPostContentAndMetadata(slug: string) {
    try {
        const { content, metadata } = await getPostFromUrlSlug(slug);
        return {
            content,
            metadata,
        };
    } catch (e) {
        return notFound();
    }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata) {
    const { metadata } = await getPostContentAndMetadata(params.slug);
    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
    };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
    const { content } = await getPostContentAndMetadata(params.slug);

    return <MDXRemote source={content} components={componentConfig} />;
}
