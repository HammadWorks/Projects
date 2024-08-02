import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

function Footer() {
  return (
    <footer className="relative bottom-0 left-0 flex flex-col w-full ">
      <div>
        <div className="rotate-180 translate-y-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill="#50B498"
          >
            <path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path>
          </svg>
        </div>
        <div className=" bg-custom-link-blue sm:h-[14rem] p-6 px-10 flex gap-5 justify-between">
          <div className="flex gap-8 flex-wrap">
            <ul className="text-white list-none">
              <li className="footer_link">About Us</li>
              <li className="footer_link">Councils</li>
              <li className="footer_link">Get The App</li>
              <li className="footer_link">Shop</li>
              <li className="footer_link">Drive for us</li>
            </ul>
            <ul className="text-white list-none">
              <li className="footer_link">Our Partners</li>
              <li className="footer_link">Work with us</li>
              <li className="footer_link">Contact Us</li>
              <li className="footer_link">FAQ</li>
              <li className="footer_link">Privacy Policy</li>
              <li className="footer_link">Terms and Conditions</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="p-2 px-5 text-black bg-white rounded w-fit">
              Logo
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="p-2 text-lg sm:text-xl text-center text-white bg-custom-link-blue">
        All Rights Reserved | abc@google.com
      </div>
    </footer>
  );
}

export default Footer;
