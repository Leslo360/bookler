import Image from "next/image";
import React from "react";
import { HouseOutlined, KeyboardArrowDown } from "@material-ui/icons";

function Header() {
  return (
    <div className="w-full h-[431px] bg-gradient-to-b from-[#023B96] to-[#022357]">
      <Image
        src="/topClouds.png"
        alt="Bookler"
        className=""
        width={1400}
        height={291}
        layout="responsive"
      />
      <div className="flex justify-between absolute top-0 right-10 m-5">
        <div className="flex p-2 h-[40px] w-[177px] justify-between items-center  text-center shadow-lg m-1 rounded-2xl backdrop-blur-md">
          <HouseOutlined />
          <h5 className="text-xs font-bold">Become a partner</h5>
          <KeyboardArrowDown />
        </div>
        <div className="flex p-2 h-[40px] w-[177px] justify-between items-center  text-center shadow-lg m-1 rounded-2xl backdrop-blur-md	">
          <Image
            width={30}
            height={30}
            alt="avatar"
            className="rounded-full"
            src="/avatar.jpeg"
          />
          <h5 className="text-xs font-bold">Leslo Graham</h5>
          <KeyboardArrowDown />
        </div>
      </div>
      <div className="flex justify-between absolute top-36  right-28 m-3">
        <Image src="/plane.png" width={162.72} height={53.52} alt="plane" />
      </div>
    </div>
  );
}

export default Header;
