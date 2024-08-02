import React from "react";

function SocialIcons() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      <img
        width={"1rem"}
        className="social_icon"
        src="/images/icons/google_icon.png"
        alt="google_icon"
      />
      <img
        width={"1rem"}
        className="social_icon"
        src="/images/icons/facebook.png"
        alt="facebook"
      />
      <img
        width={"1rem"}
        className="social_icon"
        src="/images/icons/github_icon.png"
        alt="github_icon"
      />
      <img
        width={"1rem"}
        className="social_icon"
        src="/images/icons/linkedin.png"
        alt="linkedin"
      />
    </div>
  );
}

export default SocialIcons;
