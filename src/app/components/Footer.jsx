import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[280px] items-center justify-center gap-9 flex h-16 fixed bottom-8 rounded-[100px] bg-zinc-800">
      <div className="flex flex-col items-center justify-center">
        <Image src='./Home.svg' width={23} height={23} />
        <span className="font-medium text-zinc-400 focus:text-blue-700 text-[10px]">
          Home
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src='./Business.svg' width={23} height={23} />
        <span className="font-medium text-zinc-400 focus:text-blue-700 text-[10px]">
          Home
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src='./Folder.svg' width={23} height={23} />
        <span className="font-medium text-zinc-400 focus:text-blue-700 text-[10px]">
          Home
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src='./Email.svg' width={23} height={23} />
        <span className="font-medium text-zinc-400 focus:text-blue-700 text-[10px]">
          Home
        </span>
      </div>
    </div>
  );
};

export default Footer;
