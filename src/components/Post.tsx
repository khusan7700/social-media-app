import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="felx flex-col gap-4 items-center justify-center">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/postImage.webp"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium"> Jack McBride</span>
        </div>

        <Image
          src="/more.png"
          alt=""
          width={10}
          height={10}
          className="w-5 h-5 rounded-full"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4 p-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/poostGirl.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat modi
          dolores officia id quae repudiandae hic ducimus voluptatum est
          perferendis! Libero aspernatur nesciunt vel enim, quos repellendus
          molestias doloribus deserunt.
        </p>
      </div>

      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              {" "}
              123 <span className="hidden md:inline"> Likes</span>{" "}
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              {" "}
              123 <span className="hidden md:inline"> Comments</span>{" "}
            </span>
          </div>
        </div>
        <div className="flex items-center  gap-4 bg-slate-100 p-2 rounded-xl">
          <Image
            src="/share.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300"> | </span>
          <span className="text-gray-500">
            {" "}
            123 <span className="hidden md:inline"> Share</span>{" "}
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
