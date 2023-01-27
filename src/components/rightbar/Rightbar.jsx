import React from "react";
import "./rightbar.css";
import { BsFillGiftFill } from "react-icons/bs";
export default function rightbar() {
  return (
    <div className="rightbar m-3">
      <div className="rightbar-contents">
        <BsFillGiftFill style={{ color: "red" }} />
        <span className="Bday-dates ml-3">
          Shubha and 3 other friends have their birthdays today.
        </span>
      </div>
      <div className="rightbar-image mt-3">
        <img className="rightbar-top-image" src="./assets/birthday.png"></img>
      </div>
      <div className="online-friends mt-2">
        Online Friends
        <div>
          <li type="none">
            <img
              className="online-image mr-2"
              src="./assets/profile-picture.jpg"
            ></img>
            John
          </li>
        </div>
      </div>
    </div>
  );
}
