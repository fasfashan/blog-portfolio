import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Header from "../components/header";
import ListPost from "../components/list-post";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import SectionSeparator from "../components/section-separator";
import Button from "../components/button";

export default function Index({ allPosts: { edges }, preview }) {
  const listPost = edges.slice(0, 2);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Header />
        <Intro />
        <section className="grid md:grid-cols-12 grid-cols-4 gap-4 items-start">
          <article className="md:col-span-7 col-span-12">{<ListPost posts={listPost} />}</article>
          <Subscribe />
        </section>
        <Button href="/blog">Read more articles</Button>
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
