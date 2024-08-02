import React from "react";
import InfoCard from "../InfoCard/InfoCard";

function Instruction() {
  return (
    <div>
      <InfoCard
        cardPosition={"left"}
        indexNumber={"01"}
        heading={"Getting Started"}
        para1={
          "Create your account by registering with your email and setting up a password."
        }
        para2={
          "Fill in your personal information and set your waste reduction goals."
        }
        imageUrl={"/images/number_cover/one.webp"}
      />
      <InfoCard
        cardPosition={"right"}
        indexNumber={"02"}
        heading={"Track Your Waste"}
        para1={
          "Enter your daily, weekly, or monthly waste amounts by category (e.g., organic, recyclable, hazardous)."
        }
        para2={
          "Check your dashboard to see visualizations of your waste generation trends and goal progress."
        }
        imageUrl={"/images/number_cover/two.webp"}
      />
      <InfoCard
        cardPosition={"left"}
        indexNumber={"03"}
        heading={"Find Recycling Centers"}
        para1={"Access the interactive map to find recycling centers near you."}
        para2={
          "View information on accepted materials, operating hours, and contact details for each center."
        }
        imageUrl={"/images/number_cover/three.webp"}
      />
      <InfoCard
        cardPosition={"right"}
        indexNumber={"04"}
        heading={"Explore Resources"}
        para1={
          "Search for articles, videos, and guides on recycling and waste reduction."
        }
        para2={
          "Discover practical tips for composting, reducing single-use plastics, and more."
        }
        imageUrl={"/images/number_cover/four.webp"}
      />
      <InfoCard
        cardPosition={"left"}
        indexNumber={"05"}
        heading={"Find Recycling Centers"}
        para1={
          "Receive reminders for recycling pick-up days, local events, and new resources."
        }
        para2={"Get tips tailored to your waste tracking data and goals."}
        imageUrl={"/images/number_cover/five.webp"}
      />
    </div>
  );
}

export default Instruction;
