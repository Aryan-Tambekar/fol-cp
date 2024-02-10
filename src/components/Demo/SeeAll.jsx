import React from 'react'

const SeeAll = () => {
  return (
    <>
    <Banner />
      <Trending />
      <div className="size py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          <Posts />
        </div>
        <div className="flex-[1] relative">
          <Discover />
        </div>
      </div>
    </>
  )
}

export default SeeAll