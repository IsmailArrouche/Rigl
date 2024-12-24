import React from "react";
import Picture from "./Picture";
import ProfileForm from "./CreationProfile/ProfileForm";

function Welcome() {
  return (
    <div className="w-fit mx-auto h-fit flex flex-col items-center">
      <Picture />
      <ProfileForm />
    </div>
  );
}

export default Welcome;
