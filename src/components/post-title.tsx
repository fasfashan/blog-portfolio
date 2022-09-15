export default function PostTitle({ children }) {
  return <h1 className="max-w-2xl mx-auto text-4xl md:text-6xl  font-bold tracking-tighter  leading-snug mb-4  text-left" dangerouslySetInnerHTML={{ __html: children }} />;
}
