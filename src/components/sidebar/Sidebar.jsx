import React from "react";
import "./sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { BsFillBookmarksFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarList">
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <MdRssFeed />
              <span className="sidebarListItem ml-3">Feed</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <BsFillChatSquareTextFill />
              <span className="sidebarListItem ml-3">Chats</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <MdOutlineSlowMotionVideo />
              <span className="sidebarListItem ml-3">Videos</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <MdGroups />
              <span className="sidebarListItem ml-3">Groups</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <BsFillBookmarksFill />
              <span className="sidebarListItem ml-3">Bookmarks</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <AiOutlineQuestionCircle />
              <span className="sidebarListItem ml-3">Questions</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <BsBriefcase />
              <span className="sidebarListItem ml-3">Jobs</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <BsCalendarEvent />
              <span className="sidebarListItem ml-3">Events</span>
            </li>
          </ul>
          <ul type="none" className="sidebarLists">
            <li className="sidebarList">
              <FaGraduationCap />
              <span className="sidebarListItem ml-3">Courses</span>
            </li>
          </ul>
        </div>
      </div>
      <button className="sidebarButton">show more</button>
      <hr></hr>
      <ul className="sidebarFriendList" type="none">
        <li>
          <img
            className="friendImage mr-2"
            src="/assets/profile-picture.jpg"
            alt=""
          ></img>
          John
        </li>
      </ul>
      <ul className="sidebarFriendList" type="none">
        <li>
          <img
            className="friendImage mr-2"
            src="/assets/profile-picture.jpg"
            alt=""
          ></img>
          John
        </li>
      </ul>
      <ul className="sidebarFriendList" type="none">
        <li>
          <img
            className="friendImage mr-2"
            src="/assets/profile-picture.jpg"
            alt=""
          ></img>
          John
        </li>
      </ul>
    </div>
  );
}
