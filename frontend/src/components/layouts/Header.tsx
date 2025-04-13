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
import download_icon from "../../../public/download_icon.png";
import notification_icon from "../../../public/notification_bell_icon.png";

import { Button } from "../ui/button";
import { IconNav } from "../ui/IconNav";

export default function Header() {

  return (
    <header
      className="
    flex items-center h-full w-full justify-between px-5
    
    "
    >
      <div className="h-full w-[6%] items-center
      flex justify-center
      ">
      <div className="h-full
        flex items-center
        ">
          <IconNav urlLink={spotify_icon} height={'h-3/5'}/>
        </div>
      </div>

      {/* Left side Nav bar */}
      <div
        className="leftNav h-full w-[52%] bg-black-500 flex items-center
      justify-between
      "
      > 
        <div className="h-full flex items-center
        gap-2.5
        w-[90%]">
          <IconNav urlLink={home_icon} height={'h-3/5'}/>

          {/* Search Bar  */}
          <div
            className="seachbar bg-gray-900 h-4/5
        rounded-full flex items-center px-2.5 p-3 w-full 
        justify-between 
        "
          >
            <div className="h-full flex
             items-center gap-2">
              <IconNav urlLink={search_icon} height={'h-full'}/>


              <input type="text" className="text-gray-300
              border-none focus:ring-0 outline-none
              "
              placeholder="What do want to Play?"
              />
            </div>

            <div className="h-full flex items-center gap-2">
              <div className="verticalline border border-gray-500 h-[30px]"></div>

            <IconNav urlLink={browse_icon} height={'h-[30px]'} />
            </div>
          </div>
        </div>
      </div>

      {/* Right side Nav bar */}

      <div className="rightNav h-full w-[42%] bg-black-300 flex justify-center
      items-center
      ">

      <div className="
      flex items-center bg-white h-1/2 w-fit rounded-full
      px-3 justify-end
      ">
        <p>Explore Premium</p>
      </div>

      <div className="
      flex h-4/5 items-center justify-center w-[30%] 
      text-gray-300 font-semibold gap-2 hover:text-white
      ">
        <IconNav urlLink={download_icon} height={'h-[60%]'} />
        <div>Install App</div>
      </div>

      <div className="
      flex h-4/5 items-center justify-center w-[10%]
      ">
        <IconNav urlLink={notification_icon} height={'h-[50%]'} />
      </div>

      <div className="flex h-4/5 items-center w-[20%]
      justify-center
      ">
        <SignedOut>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
      </div>
    </header>
  );
}
