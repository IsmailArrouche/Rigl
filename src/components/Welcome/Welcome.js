import React from "react";
import Picture from "./Picture";
import ProfileForm from "./CreationProfile/ProfileForm";
import CreatePost from "./Profile/creationPoste";

function Welcome() {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center">
      <Picture />
      <CreatePost />
    </div>
  );
}

export default Welcome;
