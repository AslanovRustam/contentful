"use client";
import Image from "next/image";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return (
    <div className="relative w-full h-full flex justify-center">
      <Image
        {...props}
        loader={contentfulLoader}
        fill={!props.width}
        className="object-cover"
        alt={props.alt}
      />
    </div>
  );
};

export default ContentfulImage;
