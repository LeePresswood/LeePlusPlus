import { MDXRemote } from "next-mdx-remote/rsc";
import { getPosts } from "./api.js";

export default async function AllPostsPage() {
    const posts = await getPosts();
    const postElements = posts.map((post) => (
        <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.lede}</p>
            <p>{post.creationData}</p>
        </div>
    ));
    return (
        <article>
            <h1>Posts</h1>
            <p>A reverse-chronological listing of all LeePlusPlus blog post titles, ledes, and URLs.</p>
        </article>
    );
}
