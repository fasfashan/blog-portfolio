import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { CMS_NAME } from "../../lib/constants";
import Header from "../components/header";
function About(preview) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} | Projects</title>
      </Head>
      <Container>
        <Header />
        <h1 className="text-6xl mt-20 md:w-8/12 leading-tight font-bold">Things I’ve made trying to put my dent in the universe.</h1>
      </Container>
    </Layout>
  );
}
export default About;
