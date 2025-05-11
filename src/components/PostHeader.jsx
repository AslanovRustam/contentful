import Avatar from "./Avatar";
import ContentfulImage from "./ContentfulImage";
import DateComponent from "./DateComponent";

const PostHeader = ({ post }) => {
  const { title, coverImage, author, createdDate } = post.fields;

  return (
    <>
      <h2 className="text-center font-geistMono text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 tracking-tight mb-4 ">
        {title}
      </h2>
      <div className="hidden md:flex md:justify-between md:items-center md:mb-10">
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent
          dateString={createdDate}
          className="text-sm text-gray-400"
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={coverImage.fields.file.url}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className="flex justify-between items-center md:hidden mb-6">
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent
          dateString={createdDate}
          className="text-sm text-gray-400"
        />
      </div>
    </>
  );
};

export default PostHeader;
