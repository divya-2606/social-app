import "./share.css";
import React from "react";
import { Card } from "primereact/card";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillTags } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { Button } from "primereact/button";
import { BsFillEmojiSmileFill } from "react-icons/bs";

export default function Share() {
  return (
    <div>
      <div className="shareTop">
        <Card className="m-3">
          <div className="card">
            <div className="cardItems">
              <img
                className="shareTopImg"
                src="./assets/profile-picture.jpg"
              ></img>
            </div>
            <div className="shareTopFeed ml-2 mt-2">
              What's in your mind Safak?
            </div>
          </div>
          <hr></hr>
          <div className="items">
            <li className="item-list" type="none">
              <FaPhotoVideo />
              <span className="item-element p-1">Photo or Video</span>
            </li>
            <li className="item-list" type="none">
              <AiFillTags />
              <span className="item-element p-1">Tag</span>
            </li>
            <li className="item-list" type="none">
              <ImLocation />
              <span className="item-element p-1">Location</span>
            </li>
            <li className="item-list" type="none">
              <BsFillEmojiSmileFill />
              <span className="item-element p-1">Feelings</span>
            </li>

            <Button label="Submit" className="p-button-sm px-2 py-1" />
            <div></div>
          </div>
        </Card>
      </div>
      <div className="shareBottom"></div>
    </div>
  );
}
