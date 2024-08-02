import React from "react";
import PageIndex from "../../PageIndex/PageIndex";

function AsideMenu() {
  const comments = [
    {
      id: 1,
      username: "Faizan",
      comment: "Very Nice!",
    },
    {
      id: 2,
      username: "Hammad",
      comment: "Impressive ❤️",
    },
  ];

  return (
    <aside className="w-[80vw] md:m-0 m-auto rounded-lg bg-custom-link-blue md:text-2xl md:rounded-l-lg p-6 text-white h-fit font-semibold md:w-[min(20rem,25vw)]">
      <h4 className="text-2xl md:text-xl">Comments:</h4>
      <form action="">
        <textarea
          name=""
          className="md:text-sm text-md bg-gray-200 rounded-lg text-gray-900 px-2 py-1 mt-2 w-[70vw] md:w-[20vw] lg:w-[15vw] h-fit resize-y min-h-56 max-h-80"
          placeholder="Add Comment..."
        ></textarea>
        <button className="md:text-sm text-md bg-green-300 px-5 py-1 rounded-xl shadow-md text-black">
          Submit
        </button>
      </form>
      <ul className="md:text-sm text-lg">
        {comments.map((e) => (
          <li className="my-4">
            <h5 className="md:text-sm text-lg">{e.username}:</h5>
            <p className="md:text-sm text-lg bg-custom-offWhite rounded-lg text-gray-500 px-2 py-1 mt-1">
              {e.comment}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AsideMenu;
