import React from "react";
import "./topbar.css";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";

export default function Topbar() {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <div className="topbarLogo ml-4">I_amSocial</div>
        </div>
        <div className="topbarCenter">
          <div className="searchField">
            <span className="p-input-icon-right">
              <i className="pi pi-search icon-button" />
              <InputText className="p-inputtext-sm" placeholder="Search" />
            </span>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarRightIcons">
            <span className="pi pi-user ml-4">
              <span className="topbarIconBadge">1</span>
            </span>
            <span className="pi pi-envelope ml-4">
              <span className="topbarIconBadge">1</span>
            </span>
            <span className="pi pi-bell ml-4">
              <span className="topbarIconBadge">1</span>
            </span>
            <span>
              <img
                className="topbarImage ml-6"
                src="/assets/profile-picture.jpg"
                alt=""
              />
            </span>
          </div>
          {/* <span>
            <img src="/assets/profile-picture.jpg" />
          </span> */}
        </div>
      </div>
    </>
  );
}
