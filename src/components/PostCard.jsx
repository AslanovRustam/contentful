"use client";
import Link from "next/link";
import Avatar from "./Avatar";
import ContentfulImage from "./ContentfulImage";
import DateComponent from "./DateComponent";

const PostCard = ({ post }) => {
  const { title, slug, except, coverImage, author, createdDate } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md font-geistMono transition-transform hover:scale-[1.01] hover:shadow-lg">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="mb-2 h-[160px]">
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage.fields.file.url}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-1 leading-snug">{title}</h3>
          <div className="text-sm mb-4 text-gray-400">
            <DateComponent dateString={createdDate} />
          </div>
          <p className="text-base mb-4 line-clamp-3">{except}</p>
          <Avatar name={author.fields.name} picture={author.fields.picture} />
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
