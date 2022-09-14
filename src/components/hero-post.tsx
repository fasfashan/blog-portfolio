import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <article className="">
      <div className="mt-20">
        <div className="space-y-4 p-4 bg-gray-100 bg-opacity-4  0 rounded-sm">
          <span className="text-slate-600 text-sm cursor-default">
            | <Date dateString={date} />{" "}
          </span>
          <h3 className="mb-4 text-md  leading-tight font-semibold">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h3>
          <div className="text-sm leading-relaxed text-slate-600 mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Avatar author={author} />
        </div>
      </div>
    </article>
  );
}
