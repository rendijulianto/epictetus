import Layout from "../Components/Layout";
import { useState } from "react";
import CardPost from "../Components/CardPost";
import Container from "../Components/Container";
import dummyPosts from "../utils/posts.json";
import SectionHeader from "../Components/SectionHeader";
import Head from "next/head";
export default function Posts() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>UI DESIGN</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 sm:w-10/12 mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4 mt-4">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6 ">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
