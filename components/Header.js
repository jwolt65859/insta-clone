import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { modalstate } from "../atoms/modalAtom";

// import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon} from "@heroicons/react/outline"

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalstate);
  const router = useRouter();


  return (
    <div className="shadow-sm bg-white border-b sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid  w-24 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex justify-end items-center space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn" />
                <div className="absolute text-xs w-5 h-5 -top-1 -right-2 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="Profile pic"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
