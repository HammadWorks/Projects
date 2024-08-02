import React from "react";

function InfoCard({
  heading,
  para1,
  para2,
  imageUrl,
  cardPosition,
  indexNumber,
}) {
  return (
    <section
      className="md:h-[30rem] sm:h-[26rem] py-6 px-4
       flex items-center sm:justify-around min-sm:justify-between justify-around flex-row "
      style={{
        flexDirection: `${cardPosition == "left" ? "row" : "row-reverse"}`,
        gap: `${cardPosition == "left" ? "0" : "3rem"}`,
      }}
    >
      <div className="flex flex-col sm:gap-4 gap-1 md:w-[18rem] lg:w-[28rem] w-56">
        <h2 className="text-sm font-semibold sm:text-3xl drop-shadow-3xl" >
          {heading || "Heading"}
          <div className="w-12 mt-1 h-1 rounded blur-[1.5px] bg-gray-500"></div>
        </h2>
        <p className="w-3/4 text-gray-400 text-[8px] sm:text-sm md:text-lg text-wrap">
          {para1 || "Para 1 comes here."}
        </p>
        <p className="w-3/4 text-gray-400 text-[8px] sm:text-sm md:text-lg text-wrap">
          {para2 || "Para 2 comes here."}
        </p>
      </div>
      <div>
        <h3
          className="md:text-[20rem] sm:text-[10rem] text-[94px] drop-shadow-lg  font-black bg-clip-text text-transparent bg-cover"
          style={{
            backgroundImage: `url(${imageUrl || "/images/hero_cover.jpg"})`,
          }}
        >
          {indexNumber || "01"}
        </h3>
      </div>
    </section>
  );
}

export default InfoCard;
