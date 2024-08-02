import React from "react";
import AboutCard from "./AboutCard/AboutCard";

function AboutCards() {
  return (
    <section>
      <div className="rotate-180 translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#50B498"
        >
          <path d="M0 0v4c250 0 250 96 500 96S750 4 1000 4V0H0Z"></path>
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 p-6 bg-custom-link-blue">
        <h3 className="text-3xl text-white">What We Do?</h3>
        <div className="flex justify-center flex-wrap gap-6">
          <AboutCard
            heading={"Unlock Expert Recycling and Waste Reduction Tips"}
            content={
              "Dive into our rich library of guides, videos, and articles. Discover practical tips for composting, cutting down on single-use plastics, and mastering the art of recycling."
            }
            linkText={"Unlock Resources"}
            linkAddress={"/resourses"}
            imageUrl={"/images/card_cover/resources.webp"}
          />
          <AboutCard
            heading={"Set and Achieve Waste Management Goals"}
            content={
              "Track your waste and set goals to reduce, reuse, and recycle. Our dashboard helps you monitor progress and offers tips for minimizing waste."
            }
            linkText={"Track Your Waste"}
            imageUrl={"/images/card_cover/recycle_goal.webp"}
          />
          <AboutCard
            heading={"Find Recycling Centers Near You"}
            content={
              "Easily locate nearby recycling centers with our interactive map. Get details on accepted materials, hours, and contacts to ensure proper recycling."
            }
            linkText={"Discover Recycling Centers"}
            imageUrl={"/images/card_cover/recycling_center.webp"}
          />
        </div>
        {/* <div className="flex gap-3 items-center justify-center">
          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-50 rounded-full"></div>
        </div> */}
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#50B498"
        >
          <path d="M0 0v41s40 117.6 337 20.7c46.7-15.2 104.8-46 163-46 58.1 0 116.3 30.8 163 46 297 97 337-20.7 337-20.7V0H0Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default AboutCards;
