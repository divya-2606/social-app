import React from "react";
import { Card } from "primereact/card";
import "./post.css";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { Users } from "../../dummyData";

export default function post({ post }) {
  // const user = Users.filter((u) => u.id == 1);
  // console.log(user);
  return (
    <div className="PostContainer">
      <Card className="card m-3">
        <div className="card-body">
          <img className="postImg" src={post.photo}></img>
          <div className="profile-name mr-5 ml-3">
            {post.name}
            {/* {Users.filter((u) => u.id === post.userId)[0].username} */}
          </div>
          <div className="active-status "> {post.date}</div>
        </div>
        <div className="profileImg mt-3">
          <img className="card-body-img" src="./assets/A8.jpg" />
          <div className="likes-count">
            <AiFillLike
              className="mr-2"
              style={{ height: "20%", width: "5%" }}
            />
            <FcLike style={{ height: "20%", width: "5%" }} />
            <div className="count ml-2">{post.like} People likes this</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
