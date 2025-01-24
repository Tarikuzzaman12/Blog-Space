import Link from "next/link";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.id}`} 
            className="bg-white p-4 rounded shadow hover:bg-blue-50 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}