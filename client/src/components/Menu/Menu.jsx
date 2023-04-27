import React from "react";

import "./Menu.css";

import useSideBar from "../../hooks/useSideBar";

import {SignInButton} from "../SignInButton/SignInButton";
import MenuItem from "./MenuItem/MenuItem";

export default function Menu() {
  const { items } = useSideBar();
  return (
    <div className="sideBar">
      <div className="sideBar__first">
        {items.home.map((item) => (
          <MenuItem {...item} key ={item.name} />
        ))}
      </div>

      <div className="sideBar__second">
        {items.videoMode.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>

      <div className="sideBar__signIn ">
        <div>Sign in to like videos, comment, and subscribe.</div>
        <SignInButton />
      </div>

      <div className="sideBar__fourth">
        {items.explore.map((item) => {
          if (item.title) return <div className="sideBar--title"> explore</div>;
          return <MenuItem key={item.name} {...item} />;
        })}
      </div>

      <div className="sideBar__youtubeServices">
        {items.services.map((item) => {
          if (item.title)
            return <div className="sideBar--title">more from youtube</div>;
          return <MenuItem key={item.name} {...item} />;
        })}
      </div>

      <div className="sideBar__support">
        {items.support.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
      <div className="sideBar__different">@2023 Google LLC</div>
    </div>
  );
}
