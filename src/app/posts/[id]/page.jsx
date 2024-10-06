import { getPosts } from "@/utilits/getPost";

// method-2
const getPostDetail = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailPage = async ({ params }) => {

  /**
   * Method-1
    // get all the posts
    const allPosts = await getPosts();
    // find the specific post with their id of
    const post = allPosts.find((post) => post.id == params.id);
  */
  
  const post = await getPostDetail(params.id);

  return (
    <div className="mx-40 my-10 bg-gray-200 p-5">
      <h1 className="text-lg font-semibold text-red-500">
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
