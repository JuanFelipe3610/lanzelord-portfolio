import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";
import { Post } from "../types.d.ts";
import Button from "../islands/Button.tsx";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props.data;
  return (
    <main class="p-4">
      <h1 class="text-4xl font-blod">Mi blog</h1>
      <Button></Button>
      {posts.map((post: Post) => (
        <article class="p-4">
          <h2>
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
        </article>
      ))}
    </main>
  );
}
