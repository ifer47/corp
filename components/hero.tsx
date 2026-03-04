import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0">
        {/* fill 让图片填满父容器，class object-cover 是保持比例 */}
        <Image
          src={props.imgUrl}
          fill
          className="object-cover"
          alt={props.altTxt}
        />
        <div className="absolute inset-0 bg-linear-to-br from-gray-950"></div>
      </div>
      {/* relative 的目的是为了盖住上面的 absolute */}
      <div className="flex justify-center pt-48 relative">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
