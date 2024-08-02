import React, { useState } from "react";
import { usePreview } from "../../../contexts/PreviewContext";

function ArticleForm() {
  const [title, setTitle] = useState("");
  const [mainPara, setMainPara] = useState("");
  const [cover, setCover] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [subPara, setSubPara] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const { previewContent, handlePreview } = usePreview();

  const handlePreviewSubmit = (e) => {
    e.preventDefault();
    const content = {
      mainHeading: title,
      mainPara: mainPara,
      author: "Author",
      PublishDate: "21 July, 2023",
      subParagraphs: [
        {
          subHeading: subHeading,
          subPara: subPara,
          imageUrl: "",
          videoLink: videoLink,
        },
      ],
    };
    localStorage.setItem("article", JSON.stringify(content));
    handlePreview(content);
  };

  return (
    <aside className="w-[95vw] lg:m-0 m-auto rounded-lg bg-custom-link-blue lg:text-2xl lg:rounded-l-lg p-6 text-white h-fit font-semibold lg:w-[25vw]">
      <form
        onSubmit={handlePreviewSubmit}
        className="flex flex-col gap-2 lg:text-sm"
        // action=''
      >
        <h4 className="text-2xl text-center">Article Form</h4>
        <div className="flex flex-col gap-2">
          <label htmlFor="article-title">Title:</label>
          <input
            id="article-title"
            type="text"
            className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="article-cover-content">Cover Content:</label>
          <input
            id="article-cover-content"
            type="text"
            className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100"
            value={cover}
            onChange={(e) => {
              setCover(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="article-main-content">Main Content:</label>
          <textarea
            id="article-main-content"
            type="text"
            className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100 min-h-52 max-h-72"
            value={mainPara}
            onChange={(e) => {
              setMainPara(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="article-cover-image">Cover Image:</label>
          <input
            type="file"
            name="article-cover-image"
            className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100 w-fit lg:w-44"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="Sub-Heading">Sub-Heading:</label>
            <input
              id="Sub-Heading"
              type="text"
              className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100"
              value={subHeading}
              onChange={(e) => {
                setSubHeading(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Sub-Content">Sub-Content:</label>
            <textarea
              id="Sub-Content"
              type="text"
              className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100 min-h-52 max-h-72"
              value={subPara}
              onChange={(e) => {
                setSubPara(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sub-image">Sub-Content Image:</label>
            <input
              type="file"
              name="sub-image"
              className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100 w-fit lg:w-44"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="sub-video">Youtube Video Link:</label>
            <input
              id="sub-video"
              type="text"
              className="rounded-lg text-gray-400 py-1 px-2 bg-gray-100"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </div>
        </div>
        <button className="rounded-lg text-gray-400 py-1 px-10 bg-gray-100 w-fit shadow-md hover:scale-105 self-center my-5">
          Add Passage
        </button>

        <div className="flex gap-8 self-center">
          <button
            type="submit"
            className="rounded-xl text-gray-800 py-1 px-7 bg-gray-100 w-fit shadow-md hover:scale-105 self-center my-5"
          >
            Save
          </button>
          <button className="rounded-xl text-gray-800 py-1 px-7 bg-green-300 w-fit shadow-md hover:scale-105 self-center my-5">
            Publish
          </button>
        </div>
      </form>
    </aside>
  );
}

export default ArticleForm;
