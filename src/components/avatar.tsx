import Image from "next/image";

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName ? `${author.node.firstName} ${author.node.lastName}` : author.node.name || null;

  return (
    <div className="flex items-center">
      <div className="w-10 h-10 relative mr-2">
        <Image src={author.node.avatar.url} layout="fill" className="rounded-full" alt={name} />
      </div>
      <div className="text-sm font-bold">{name}</div>
    </div>
  );
}
