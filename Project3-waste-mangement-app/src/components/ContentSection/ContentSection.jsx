import React from "react";

function ContentSection({
  mainHeading = "",
  mainPara = "",
  author = "",
  PublishDate = "",
  subParagraphs = [
    {
      subHeading: "",
      subPara: "",
      imageUrl: "",
      videoLink: "",
    },
  ],
}) {
  return (
    <article className="bg-custom-offWhite md:m-0 m-auto md:w-[70vw] w-[90vw] md:p-24 p-10 rounded-r-xl flex flex-col gap-10 mb-14 text-justify">
      <h3 className="md:text-4xl text-2xl text-balance font-medium text-center">
        {mainHeading || "Main Heading"}
      </h3>
      <div className="sm:text-sm text-[12px] sm:text-left text-center text-gray-500">
        {PublishDate || ""} -{" "}
        <span className="text-custom-link-blue">{author || "Author"}</span>
      </div>
      <p>{mainPara || "Main Paragraph"}</p>

      {subParagraphs.map((para) => (
        <div key={para.subHeading} className="flex flex-col gap-[inherit]">
          <h4 className="sm:text-2xl text-xl font-medium text-center">
            {para["subHeading"] || "Sub Heading"}
          </h4>
          <p className="sm:text-lg text-sm">{para["subPara"] || "Sub Para"}</p>

          {para.imageUrl ? (
            <img
              className="rounded aspect-video place-self-center"
              src={para["imageUrl"] || "/images/card_cover/recycle_goal.jpg"}
              alt={
                para["imageUrl"]
                  .split("/")
                  [para["imageUrl"].split("/").length - 1].split(".")[0]
              }
              width={"600rem"}
            />
          ) : (
            ""
          )}

          {para.videoLink ? (
            <iframe
            className="rounded aspect-video place-self-center lg:w-fit w-full"
              width="560"
              height="315"
              src={para.videoLink}
              title="YouTube video player"
              
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}
        </div>
      ))}
    </article>
  );
}

export default ContentSection;
