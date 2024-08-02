import React from "react";
import { useState } from "react";

function Header({
  coverHeight = "long",
  coverHeading = "",
  coverContent = "",
  coverImageUrl = "",
  allowLink = false,
}) {
  let height = "lg:h-[35rem] md:h-[30rem] sm:h-[25rem] h-[20rem]";

  if (coverHeight === "short") {
    height = "lg:h-[32rem] md:h-[28rem] sm:h-[23rem] h-[18rem]";
  }

  return (
    <header
      className={`relative left-0 w-full bg-no-repeat bg-cover ${height} top-0 mb-16 bg-zinc-500`}
      style={{
        backgroundImage: `url(${coverImageUrl || "/images/hero_cover.webp"})`,
      }}
    >
      <div className="absolute flex flex-col gap-5 text-wrap left-10 top-28">
        <h1 className="w-[min(50vw,33.33rem)] text-[min(2rem,3vw)] font-bold text-white">
          {coverHeading || "Cover Heading"}
        </h1>
        <h2 className="w-[min(50vw,30rem)] text-[min(1.5rem,2vw)] text-white">
          {coverContent ||
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A provident expedita non porro esse molestias vel reprehenderit magni doloribus ipsa, assumenda officia quasi."}
        </h2>

        {allowLink ? (
          <div>
            <ul className="flex flex-wrap items-center gap-4 text-[min(1.5rem,2vw)]">
              <li className="cursor-pointer hover:text-white hover:scale-105 text-custom-link-blue ">
                Where to recycle?
              </li>
              <li className="cursor-pointer hover:text-white hover:scale-105 text-custom-link-blue ">
                Learn more &#8594;
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
