import { getPosts } from "@/utilities/getPost";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

// use specific font style on specific page.
const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "Posts", // uses for absolute page title.
  },
  description: "Super Powerful web app created with Next Js.",
};

const PostsPage = async () => {
  const allPosts = await getPosts();
  return (
    <div className={`mx-40 my-8 grid grid-cols-3 gap-5 ${bebasNeue.className}`}>
      {allPosts?.map((post) => (
        <div className="border-2 border-red-400 p-2" key={post.id}>
          <h3 className="text-lg font-semibold text-red-500 hover:underline">
            <Link href={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
