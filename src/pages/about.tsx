import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import { CMS_NAME } from "../../lib/constants";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/future/image";
import Photo from "../assets/photoprofile.jpg";
import SectionSeparator from "../components/section-separator";
export default function About(preview) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME} | About</title>
      </Head>
      <Container>
        <Header />
        <div className="grid items-baseline mt-20 md:grid-cols-12 grid-cols-4 gap-y-20">
          <div className="md:col-span-7 col-span-12 space-y-4">
            <h1 className="md:text-6xl text-4xl leading-tight font-bold">I’m Fasha Fadillah. I live in Bogor, where I design the future.</h1>
            <p className="leading-relaxed text-slate-600 text-sm ">
              I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
            </p>
            <p className="leading-snug text-slate-600 text-sm ">
              The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped —
              hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p className="leading-snug text-slate-600 text-sm ">
              I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into
              orbit and was able to transmit a photo back down to our family computer from space.
            </p>
            <p className="leading-snug text-slate-600 text-sm ">
              Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own
              backyards.
            </p>
          </div>
          <div className="md:col-start-9 md:col-end-13 col-span-12 ">
            <Image className="aspect-square rotate-3 rounded-2xl  object-cover dark:bg-zinc-800" src={Photo} alt="Fasha" />
          </div>
        </div>
        <SectionSeparator />
        <Footer />
      </Container>
    </Layout>
  );
}
