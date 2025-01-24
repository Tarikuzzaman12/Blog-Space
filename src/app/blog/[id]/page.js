async function fetchPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }
  
  export default async function BlogDetails({ params }) {
    const post = await fetchPost(params.id);
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>
      </div>
    );
  }