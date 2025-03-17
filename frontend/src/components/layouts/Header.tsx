import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import spotify_icon from "../../../public/spotify_icon.png";
import home_icon from "../../../public/home_icon.png";
import search_icon from "../../../public/search_icon.png";
import browse_icon from "../../../public/browse_icon.png";

import { Button } from "../ui/button";

export default function Header() {
  return (
    <header
      className="
    flex items-center h-full w-full justify-between px-5
    "
    >
      <div className="leftNav h-full w-1/2 flex items-center">
        <div className="icon h-[45px] w-[45px] bg-transparent">
          <img src={spotify_icon} alt="spotifyIcon w-full h-full" />
        </div>

        <div className="icon h-[45px] w-[45px] bg-transparent">
          <img src={home_icon} alt="spotifyIcon w-full h-full" />
        </div>

        <div
          className="seachbar bg-gray-900 h-[70%] 
        rounded-full flex items-center px-2.5 p-5 w-[80%] justify-between
        "
        >
          <div className="icon h-[35px] w-[35px] bg-transparent">
            <img src={search_icon} alt="spotifyIcon w-full h-full" />
          </div>

          <p className="text-gray-300">What do want to Play?</p>

          <div className="verticalline border border-gray-500 h-[50%]"></div>

          <div className="icon h-[35px] w-[35px] bg-transparent">
            <img src={browse_icon} alt="spotifyIcon w-full h-full" />
          </div>
        </div>
      </div>

      <div className="rightNav h-full w-1/2 flex justify-end">
        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
