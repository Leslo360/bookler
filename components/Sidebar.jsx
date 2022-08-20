import {
  Home,
  Menu,
  AccountBalanceWallet,
  AccountBox,
  BusinessCenter,
  Public,
  LiveHelp,
  EmojiEventsOutlined,
  Eject,
} from "@material-ui/icons";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="absolute bg-[#328CFF] p-5 rounded-lg  top-0 m-10 h-[709px] w-[240px] ">
      <div className="flex  justify-between">
        <Image
          src="/logo.png"
          width={63.58}
          height={15.97}
          layout="fixed"
          alt="Bookler"
        />
        <Menu />
      </div>
      <div className="flex flex-col mt-16">
        <div className="flex cursor-pointer flex-col justify-between">
          <h5 className="p-2 hover:shadow-lg rounded-full bg-[#0076FF] flex w-[170px] mb-4">
            <Home className="mr-3" />
            Home
          </h5>
          <h5 className="p-2 hover:shadow-lg rounded-full flex w-[170px] mb-4">
            <AccountBalanceWallet className="mr-3" />
            Wallet
          </h5>
          <h5 className="p-2 hover:shadow-lg rounded-full flex w-[170px] mb-4">
            <AccountBox className="mr-3" />
            Booking
          </h5>
          <h5 className="p-2 hover:shadow-lg rounded-full flex w-[170px] mb-4">
            <BusinessCenter className="mr-3" />
            Business
          </h5>
          <h5 className="p-2 hover:shadow-lg rounded-full flex w-[170px] mb-4">
            <Public className="mr-3" />
            Explore
          </h5>
          <h5 className="p-2 hover:shadow-lg rounded-full flex w-[170px] mb-4">
            <LiveHelp className="mr-3" />
            Support
          </h5>
        </div>

        <div className="absolute bottom-10 flex justify-center">
          <div className="flex justify-between absolute bottom-4 shadow-lg p-2 w-11/12  rounded-full bg-white">
            <div
              className="bg-gradient-to-b from-[#D10015] to-[#FF4369] w-[30px] h-[30px] rounded-full p-1 flex justify-center
              
            "
            >
              <Image
                alt="premium"
                width={30}
                height={30}
                src="/diamond_white.png"
              />
            </div>
            <div className="flex flex-col ml-[-20px]">
              <h4 className="text-black text-xs ml-[-7px] font-extrabold">
                Get Premium
              </h4>
              <h6 className="text-gray-600 text-xs mt-1 font-extralight">
                R60/m
              </h6>
            </div>
            <div className="rotate-90 mr-2">
              <Eject color="disabled" fontSize="small" />
            </div>
          </div>
          <Image
            src="/sidebarClouds.png"
            className=""
            alt="clouds"
            width={240}
            height={152}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
