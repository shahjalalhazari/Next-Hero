const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostsPage = async () => {
  const allPosts = await getPosts();
  return (
      <div className="mx-40 my-8 grid grid-cols-3 gap-5">
        {allPosts?.map((post) => (
          <div className="border-2 p-2" key={post.id}>
            <h6 className="text-lg font-semibold text-red-500">{post.id}. {post.title}</h6>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
  );
};

export default PostsPage;
