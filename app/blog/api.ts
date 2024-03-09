type Post = {
    id: number;
    title: string;
    urlSafeTitle: string;
    mdUrl: string;
    description: string;
    tags: string[];
};

/**
 * Get a list of posts from the data store.
 *
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts -- optionally filtered by tag.
 */
export async function getPosts(): Promise<Post[]> {
    return [
        {
            id: 1,
            title: "Reporting Security Issues",
            urlSafeTitle: "reporting-security-issues",
            mdUrl: "https://raw.githubusercontent.com/facebook/react/main/SECURITY.md",
            description: "How to report security issues to the React team.",
            tags: ["security", "reporting", "issues"],
        },
    ];
}

export async function getPostByTitle(title: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find((post) => post.title === title);
}
