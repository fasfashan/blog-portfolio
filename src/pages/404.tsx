import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { CMS_NAME } from "../../lib/constants";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
export default function Error(preview) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} | Page not found</title>
      </Head>
      <Container>
        <Header />
        <div className="mt-20 space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Page not found</h1>
            <p className="text-2xl font-normal text-slate-600">Sorry, but the page you were looking for could not be found.</p>
          </div>
          <p className="text-md">
            You can return to
            <Link href="/">
              <a className="text-teal-500"> my front page</a>
            </Link>
            , or{" "}
            <a className="text-teal-500" href="mailto:pasapadilah1410@gmail.com">
              {" "}
              drop me a line
            </a>{" "}
            if you can't find what you're looking for.
          </p>
        </div>

        <Footer />
      </Container>
    </Layout>
  );
}
