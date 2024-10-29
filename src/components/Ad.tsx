import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between to-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="/car.webp"
            alt=""
            fill
            className="w-8 h-8 rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4 ">
          <Image
            src="/car.webp"
            alt=""
            width={24}
            height={24}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit, quo id laborum consectetur enim"
            : size === "md"
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias natus, deleniti ut libero "
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit get are me grap extra student teacher. asgtas gagrg  ad asfa e asefa serf"}
        </p>
        <button className="bg-gray-200 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
