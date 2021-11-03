import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CardPost from "../Components/CardPost";
import Container from "../Components/Container";
import FeaturedPost from "../Components/FeaturedPost";
import Layout from "../Components/Layout";
import dummyPosts from "../utils/posts.json";
const Home: NextPage = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex flex-wrap -mx-4 mt-4">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6 ">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
