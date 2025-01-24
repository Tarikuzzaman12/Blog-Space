import Link from "next/link";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  const handleViewDetails = (id) => {
    alert(`Post ID: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {posts.slice(0, 12).map((post) => (
          <div 
            key={post.id} 
            className="bg-white p-6 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4 h-[60px]">{post.title.substring(0, 40)}...</h2>
            <p className="text-gray-600 mb-6 h-[96px]">
              {post.body.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center flex-grow">
              <Link 
                href={`/blog/${post.id}`} 
                className="text-blue-600 hover:text-blue-800 "
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
