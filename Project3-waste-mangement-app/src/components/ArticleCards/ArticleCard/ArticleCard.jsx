import React from "react";

function ArticleCard({
  heading = "",
  content = "",
  imageUrl = "",
  author = "",
}) {
  return (
    <div className="hover:scale-110 drop-shadow-lg transition-all flex flex-col items-center h-[30rem] w-[20rem] bg-white rounded-2xl gap-4">
      <div
        className="h-[200px] drop-shadow-xl w-full bg-cover rounded-t-2xl"
        style={{
          backgroundImage: `url(${imageUrl || "/images/hero_cover.webp"})`,
        }}
      ></div>
      <div className="px-4">
        <div className="h-[210px] flex flex-col gap-2 cursor-default">
          <div className="text-gray-500 text-sm">
            July 23, 2024 -{" "}
            <span className="text-custom-link-blue">{author || "Author"}</span>
          </div>
          <h4 className="text-lg font-bold text-wrap">
            {heading || "Heading of the card"}
          </h4>
          <p className="text-sm text-gray-500">
            {content ||
              "lorem25 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium labore cum excepturi debitis quod mollitia aut quibusdam dolore. Recusandae officia dolorum eaque voluptas, numquam iure."}
          </p>
        </div>
      </div>
      <p className="text-sm cursor-pointer text-custom-link-blue">
        learn more &#8594;
      </p>
    </div>
  );
}

export default ArticleCard;
