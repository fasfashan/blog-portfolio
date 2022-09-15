import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Header from "../components/header";
import Footer from "../components/footer";
import ListPost from "../components/list-post";
import SectionSeparator from "../components/section-separator";

export default function Blog({ allPosts: { edges }, preview }) {
  const allPost = edges.slice();
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} | Blog</title>
      </Head>
      <Container>
        <Header />
        <div className="grid items-baseline mt-20 md:grid-cols-12 grid-cols-4 gap-y-20">
          <div className="md:col-span-7 col-span-12 space-y-4">
            <h1 className="md:text-6xl text-4xl leading-tight font-bold">Writing on software design, company building, and the aerospace industry.</h1>
            <p className="leading-relaxed text-slate-600 text-md ">
              I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
            </p>
          </div>
          <article className="md:col-span-8 col-span-12">{<ListPost posts={allPost} />}</article>
        </div>
        <SectionSeparator />
        <Footer />
      </Container>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
