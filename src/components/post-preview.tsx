import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";
import ButtonText from "./button-text";

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <article className="mb-8">
      <div className="space-y-4 px-4 py-8 bg-gray-100 bg-opacity-50  rounded-md">
        <span className="text-slate-600 text-sm cursor-default">
          | <Date dateString={date} />{" "}
        </span>
        <h3 className="mb-4 text-md  leading-relaxed font-semibold">
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </h3>
        <div className="text-sm leading-relaxed text-slate-600 mb-8" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="space-y-4">
          <ButtonText href={`/posts/${slug}`}>Read Article</ButtonText>
          <Avatar author={author} />
        </div>
      </div>
    </article>
  );
}
