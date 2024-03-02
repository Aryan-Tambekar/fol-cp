import React from 'react';
import Banner from "./Banner";
import Trending from "./Trending";
import Posts from "../Common/Posts/Posts";
import Discover from "./Discover";

export const SeeAll = () => {
  return (
    <>
      <div className="size py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          <Posts />
        </div>
        <div className="flex-[1] relative">
        </div>
      </div>
    </>
  )
}
