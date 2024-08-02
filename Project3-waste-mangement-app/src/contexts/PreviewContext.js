import { useContext, createContext } from "react";

export const PreviewContext = createContext({
  previewContent: {
    mainHeading: "Main Heading",
    mainPara: "Main Para",
    author: "Author",
    PublishDate: "21 July, 2023",
    subParagraphs: [
      {
        subHeading: "Sub Heading",
        subPara: "Sub Para",
        imageUrl: " ",
        videoLink: " ",
      },
    ],
  },
  handlePreview: ()=>{},
});

export const usePreview = () => useContext(PreviewContext);

export const PreviewProvider = PreviewContext.Provider;
