import React from "react";

function ProfileHeader({
  coverImageUrl = "",
  username = "USER",
  orgName = "Organisation name",
  address = "Address",
}) {
  return (
    <header
      className={`relative left-0 w-full bg-no-repeat bg-cover md:h-[20rem] sm:h-[15rem] h-[10rem] top-0 mb-16 bg-zinc-500`}
      style={{
        backgroundImage: `url(${
          coverImageUrl || "/images/article_cover.webp"
        })`,
      }}
    >
      <div className="absolute flex flex-col gap-5 text-wrap md:top-64 sm:top-48 left-10 top-28 bg-black md:h-36 md:w-36 h-32 w-32 rounded-full drop-shadow-lg">
        <img
          src="/images/Avatar.webp"
          alt="avatar"
          className="bg-black h-full w-full rounded-full"
        />
      </div>
      <div className="absolute flex flex-col text-wrap md:left-52 md:top-80 sm:top-60 left-48 top-40">
        <h3 className="text-black sm:text-2xl text-xl font-semibold ">
          {username}
        </h3>
        {orgName ? (
          <>
            <p className="text-gray text-sm">{orgName}</p>
            <p className="text-gray-500 text-sm">{address}</p>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default ProfileHeader;
