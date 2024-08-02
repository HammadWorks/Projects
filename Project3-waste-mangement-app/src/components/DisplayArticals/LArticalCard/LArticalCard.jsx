import React from "react";
import { Link } from "react-router-dom";

function LArticalCard({
  heading = "",
  content = "",
  imageUrl = "",
  author = "",
}) {
  return (
    <div className="hover:scale-110 drop-shadow-lg transition-all flex sm:flex-row flex-col items-center sm:w-[60vw] w-[28rem] sm:h-[20rem] bg-white border rounded-2xl gap-4 p-4">
      <div
        className="sm:w-[66rem] drop-shadow-xl w-full h-[16rem] bg-cover rounded-2xl"
        style={{
          backgroundImage: `url(${imageUrl || "/images/hero_cover.webp"})`,
        }}
      ></div>
      <div className="px-4 cursor-default">
        <div className="h-[14rem] flex flex-col gap-2 cursor-default">
          <h4 className="text-lg font-bold text-wrap">
            {heading || "Heading of the card"}
          </h4>
          <p className="sm:max-md:text-[10px] text-sm text-gray-500">
            {content ||
              "lorem25 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium labore cum excepturi debitis quod mollitia aut quibusdam dolore. Recusandae officia dolorum eaque voluptas, numquam iure."}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-500 sm:max-md:text-[10px] text-sm md:text-sm text-balance">
            July 23, 2024 -{" "}
            <span className="text-custom-link-blue">{author || "Author"}</span>
          </div>
          <Link to={'/Content'} className="cursor-pointer sm:max-md:text-[10px] text-custom-link-blue text-sm md:text-sm text-nowrap">
            learn more &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LArticalCard;
