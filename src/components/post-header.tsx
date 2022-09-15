import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({ title, coverImage, date, author, categories }) {
  return (
    <>
      <div className="max-w-2xl space-y-4 mx-auto mt-20">
        <div className="text-sm text-slate-600">
          Posted <Date dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>

        <div className="mb-6">
          <Avatar author={author} />
        </div>
      </div>
    </>
  );
}
