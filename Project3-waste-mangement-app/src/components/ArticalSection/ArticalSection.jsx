import React, { useEffect, useState } from "react";
import ContentSection from "../ContentSection/ContentSection";
import ArticleForm from "./ArticleForm/ArticleForm.jsx";
import AsideMenu from "../DisplayArticals/AsideMenu/AsideMenu.jsx";
import { PreviewProvider } from "../../contexts/PreviewContext.js";

function ArticalSection({ role = "USER" }) {
  const [previewContent, setPreviewContent] = useState("");

  const articleContent = {
    mainHeading: "Refill shops: Everything you need to know",
    mainPara:
      "Are you among the two thirds of the UK population who have a concern about plastic waste? Research from WRAP, the climate action NGO that brings you Recycle Now, shows that two in three of us feel that plastic waste is an important issue to us personally – but we all know how challenging it can be to act on that concern when shopping! As a nation, we’re getting good at trying out new kinds of shopping that cut down on unnecessary packaging, and refill shops are one answer. If you’re not yet familiar with the concept, it’s only a matter of time before you’re a convert! Here’s everything you need to know.",
    author: "Brought to you by WRAP",
    PublishDate: "27 July, 2024",
    subParagraphs: [
      {
        subHeading: "What is a refill shop or online refill store?",
        subPara: `The idea of a refill shop – or the online equivalent – is that you can buy many of your store-cupboard essentials and cleaning products without the packaging. You take along your own containers and refill them, and the bonus is that you can save money by shopping this way. You might also have heard them referred to as ‘refill stations’ or ‘zero waste refill stores’, but it’s all the same idea! 
    
            The great thing about this concept is that not only does it cut down on packaging AND keep existing packaging in use, but it also allows you to measure out the exact amount of something that you need. That saves you money and cuts waste at the same time, because you don’t end up buying more than you’ll actually use. It’s also a lot of fun, so it’s a win all round!  
    
            Another take on the refill concept is ‘pre-fill’, where you buy a full container, return it and the brand refills it and puts it back on the shelf. You then buy another filled version. You’re most likely to see this for personal care products, such as shampoo or beauty products. `,
        imageUrl:
          "https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F1c3vRxgGzLoArEMQdDSVRt%2F036ef1444eda83ca545a6d5fb7831434%2FIMG_9356.jpg&w=3840&q=75",
      },
      {
        subHeading: "What can you buy at a refill shop?",
        subPara: `Expect to find dried store-cupboard essentials such as rice, pasta, flour and sugar in most refill shops (do check out the shop online before you go if there’s something specific you’re after), as well as household cleaning products (think washing up liquid and washing powder) and toiletries such as shampoo and shower gel.  
    
            As the popularity of this way of shopping grows, refill shops are expanding their stock to include lots of other things, too, so you can tick off even more of your shopping list while you’re there. Look out for tea and coffee, dried fruit, snacks and lots more. It’s a great way to try new things, as you can buy a small amount to see if you like it! `,
        imageUrl:
          "https://www.recyclenow.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ft5gtctpjc8ne%2F559CLyXkRhnQpM3JByWuQM%2F9eb7ea74a54e4187dca9fd5fc1ba458b%2FIMG_9421.jpg&w=3840&q=75",
      },
      {
        subHeading: "Finding your nearest refill shop",
        subPara: `So where can you find these miraculous places? The Refill app is one of a number of tools that can help you find local refill shops near you, while Refill Ambassadors or City to Sea can tell you where to find your nearest water bottle refilling station. More and more brands are also now offering refills as an option, including (but not limited to!) the Body Shop, Faith in Nature and Ecover.  
    
            It’s always worth a look in your local supermarket, too, as more of them are introducing this concept to their aisles. For example, WRAP has worked with ASDA and Unilever to develop refill shops in four ASDA stores, guaranteeing cheaper prices for a range of dried food, toiletries and even pet food. M&S offers a “fill your own” range at 15 of their stores, while Waitrose has “Waitrose Unpacked” at four stores and Morrisons has an initiative for bringing your own container to its salad bars. Ocado, Aldi and Waitrose are among the brands who’ve signed up for the Refill Coalition and committed to developing and testing a standardised refill solution in store and online. And it’s likely that these numbers will only grow in the months and years ahead! `,
        imageUrl: "",
      },
      {
        subHeading: "How to shop at a refill shop",
        subPara: `Before you go, it’s great to get into the habit of checking your cupboards to see what’s left and get an idea of how much you’ll need of each product. Write a shopping list, including the weights of what you’ll need if a recipe requires specific amounts of something you might not normally buy.  
    
            When you’re ready to head to the shop, assemble your containers. Grab any sealable containers that you can reuse, such as takeaway containers, plastic butter or ice cream tubs, glass jars with lids or even reusable freezer bags. If you’re buying toiletries or cleaning products, take empty bottles with lids. Make sure they’re clean and you’re good to go! Top tip – if you don’t want to take a large bottle with you because it’ll be too heavy, take some smaller ones that you can decant into the big one when you’re home. 
    
            Pop them all in a reusable shopping bag (‘bag for life’) and you’re all set to head out. Don't worry if you don’t have a container for everything you need, as most shops provide spares that you can continue reusing in the future. 
    
            When you get to the shop, your empty container will be weighed and you can then fill it using the scoops and pumps provided. If you’re not sure how to do this, just ask – staff will be happy to help! Once filled, your container will be weighed again and the weight of the container will be taken from the total. You only pay for the amount you need. 
    
            Once you’re home, deploy your favourite marker pen or label printer and label your food containers with the date you refilled them – that way you’ll know how long they’ve been in your cupboard. That said, if you’ve bought only the quantity you need, they shouldn’t be sitting around too long! 
    
            Finally, if you do end up with surplus packaging that you don’t have a use for – leaky cardboard packaging isn’t usually very useful for dry foods such as flour! – then find out what you can recycle at home or at local facilities using our Recycling Locator. `,
        videoLink:
          "https://www.youtube.com/embed/6jQ7y_qQYUA?si=OomBWQaXeUs7j94D",
      },
    ],
  };

  const handlePreview = (content) => {
    console.log(content);
    const localContent = JSON.parse(localStorage.getItem("article"));
    setPreviewContent({ ...localContent });
  };

  useEffect(() => {
    const localContent = JSON.parse(localStorage.getItem("article"));
    setPreviewContent({ ...localContent });
  }, []);

  // role = "ADMIN";
  return (
    <PreviewProvider value={{ previewContent, handlePreview }}>
      {role === "ADMIN" ? (
        <main className="flex md:justify-between lg:flex-row flex-col mb-10">
          <ContentSection {...previewContent} />
          <ArticleForm />
        </main>
      ) : (
        <main className="flex md:justify-between md:flex-row flex-col mb-10">
          <ContentSection {...articleContent} />
          <AsideMenu />
        </main>
      )}
    </PreviewProvider>
  );
}

export default ArticalSection;
