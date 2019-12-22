import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import "./trendingcommunity.scss";
import { useAuthProp, useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";
import Button from "../Button/button";

export default function trendingcommunity() {
  const { setAuthProps } = useAuthPopup();

  const [subReddits, setTrendingSubReddit] = useState([
    { id: 1, name: "r/climate-change", numOfMembers: 27000 },
    { id: 2, name: "r/fashion", numOfMembers: 56000 },
    { id: 3, name: "r/social", numOfMembers: 75000 },
    { id: 4, name: "r/politics", numOfMembers: 50000 },
    { id: 5, name: "r/travel", numOfMembers: 20000 },
  ]);
  // const [isLoading, setLoader] = useEffect(true);

  useEffect(() => {
    // const getTrendingCommunties = async () => {
    //   const res = await fetch(`${process.env.API_URL}/trendingcommunities/test`);
    //   const data = await res.json();
    //   setTrendingSubReddit(data);
    //   setLoader(false);
    // };
    //   getTrendingCommunties();
  }, []);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="trending-community">
      <p className="trending-community__headline">Trending communities</p>
      {subReddits.map((subReddit, index) => {
        return (
          // CHANGE THIS KEY TO SOMETHING OTHER THAN INDEX IN THE FUTURE
          <div key={index}>
            <div className="row">
              <div className="col-1-of-4">
                <div className="image-wrapper">
                  <img
                    className="icon"
                    src={`/trending-images/icon-${index + 1}.jpg`}
                    alt="photo1"
                  />
                </div>
              </div>
              <div className="col-2-of-4">
                <div className="subreddit-info">
                  <p className="trending-community__subreddit-info__sub-info-1">
                    {subReddit.name}
                  </p>
                  <p className="trending-community__subreddit-info__sub-info-2">
                    {`${subReddit.numOfMembers} k members`}
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                {/* <div className="trending-community__join-btn"> */}
                <Button
                  cx="trending-community__join-btn"
                  text="Join"
                  size="normal"
                ></Button>
                {/* </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
