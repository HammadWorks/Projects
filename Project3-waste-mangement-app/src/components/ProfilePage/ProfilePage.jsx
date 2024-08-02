import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import WasteData from "./WasteData/WasteData";
import GoalTodo from "./GoalTodo/GoalTodo";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <main className="bg-custom-offWhite flex flex-col gap-10 pb-10">
      <ProfileHeader />
      <WasteData orgWaste={1001} recycleWaste={3453}/>
      <GoalTodo />
      <Link to={"/organisation"} className="text-center text-custom-link-blue hover:underline text-lg" >Register as a Organisation &#8594;</Link>
    </main>
  );
}

export default ProfilePage;
