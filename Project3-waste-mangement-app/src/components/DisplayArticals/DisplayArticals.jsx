import React from "react";
import AsideMenu from "./AsideMenu/AsideMenu";
import LArticalCard from "./LArticalCard/LArticalCard";

function DisplayArticals() {
  const articalsContents = [
    {
      _id: 1,
      heading: "Get started with Tailwind CSS",
      content:
        "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
      imageUrl: "",
      author: "Tailwind Labs Inc.",
    },
    {
      _id: 2,
      heading: "Get started with Tailwind CSS",
      content:
        "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.",
      imageUrl: "",
      author: "Tailwind Labs Inc.",
    },
  ];
  return (
    <main className="flex md:flex-row flex-col justify-between mb-8">
      <section className="flex justify-between flex-col items-center gap-8 p-8 bg-custom-offWhite md:rounded-r-xl w-full md:w-fit">
        {articalsContents.map((articalsContent) => (
          <LArticalCard key={articalsContent._id} {...articalsContent} />
        ))}
      </section>
      <AsideMenu />
    </main>
  );
}

export default DisplayArticals;
