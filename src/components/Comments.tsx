import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="/test.webp"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className=" flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder=" Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={10}
            height={10}
            className="w-5 h-5 rounded-full cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENT */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="/photo.webp"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* DECS */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias natus, deleniti ut libero aspernatur est quo id laborum
              consectetur enim!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={10}
                  height={10}
                  className="w-5 h-5 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123</span>
              </div>
              <div className="">Replay</div>
            </div>
          </div>

          {/* ICONS */}

          <Image
            src="/more.png"
            alt=""
            width={10}
            height={10}
            className="cursor-pointer w-4 h-4  "
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
