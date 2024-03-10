import matter from "gray-matter";

type Post = {
    content: string;
    metadata: {
        id: number;
        title: string;
        author: string;
        creationDate: number;
        description: string;
        keywords: string[];
    };
};

/**
 * This object is used to fetch the content of the blog post from the public asset directory.
 * Posts are "registered" here by their URL-safe title, and the value is an object that includes
 * both a path to the markdown file (index by date) and a path to the headline image (indexed by post ID).
 */
const siteMap = {
    "sample-post": {
        mdUrl: "/md/2024/03/03/sample-post.md",
        headlineImageUrl: "/img/1/headline.jpg?raw=true",
    },
};

/**
 * Retrieve the markdown content of a blog post by its URL slug. This content is then decoded by gray-matter
 * in order to extract the front matter and the markdown body.
 *
 * Read more about gray-matter here:
 * https://github.com/jonschlinkert/gray-matter
 *
 * @param slug URL slug of the post to fetch.
 *
 * @returns Gray-matter-decoded markdown content of the post.
 */
export async function getPostFromUrlSlug(slug: string): Promise<Post> {
    const post = siteMap[slug as keyof typeof siteMap];
    if (!post) {
        throw new Error("Post not found");
    }

    const currentHost = process.env.SERVER_HOST || "http://localhost:3000";

    const response = await fetch(`${currentHost}${post.mdUrl}`);
    const matterDecode = matter(await response.text());

    return {
        content: matterDecode.content,
        metadata: {
            id: matterDecode.data.id,
            title: matterDecode.data.title,
            author: matterDecode.data.author,
            creationDate: matterDecode.data.creationDate,
            description: matterDecode.data.description,
            keywords: matterDecode.data.keywords,
        },
    };
}
