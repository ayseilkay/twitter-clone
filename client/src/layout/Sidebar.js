import React, { useState } from "react";
import SideLink from "../components/SideLink";
import UserBox from "../components/UserBox";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookMarksIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  PopulerIcon,
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  ReplyIcon,
  ReTweetIcon,
  LikeIcon,
  ShareIcon,
  SearchIcon,
} from "../icons/icon";
import twitterLogo from "../images/twitter.png";

const sideLinks = [
  { name: "Home", icon: HomeIcon },
  { name: "Explore", icon: ExploreIcon },
  { name: "Notifications", icon: NotificationIcon },
  { name: "Messages", icon: MessagesIcon }, 
  { name: "Bookmarks", icon: BookMarksIcon},
  { name: "Profile", icon: ProfileIcon },
  { name: "More", icon: MoreIcon },
];

function Sidebar() {
    const [active,setActive]= useState('Home');
    const handleMenuItemClick= (name)=>{
        setActive(name);
    }
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-primary-light transform transition-colors duration-200">
          <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
        </div>
        <nav className="mb-4">
          <ul>
           {sideLinks.map(({name,icon})=>(
               <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick ={handleMenuItemClick}/>
           ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">
          {" "}
          Tweet
        </button>
      </div>
      <div><UserBox/></div>
    </div>
  );
}

export default Sidebar;
