import React from "react";
import dayjs from "dayjs";
import CommunityBox from "./communitybox";
import CommunityAboutUsers from "./communityaboutusers";
import Button from "../Button";

type Props = {
  description: string;
  createdOn: string;
  memberCount: number;
  userMemberLevel: string;
};

export default function CommunityAbout(props: Props) {
  const { description, createdOn, memberCount, userMemberLevel } = props;

  const viewerCount = getFakeViewership();

  return (
    <CommunityBox header="About Community" cx="community__about">
      <div>{description}</div>
      <div className="community__about__users">
        <CommunityAboutUsers name="Members" count={memberCount} />
        <CommunityAboutUsers name="Viewers" count={viewerCount} />
      </div>
      <hr />
      <div>Created {dayjs(createdOn).format("MMMM D[,] YYYY")}</div>
      {!!userMemberLevel && (
        <>
          <Button href="/submit" text="Create Post" />
          <hr />
          <div>
            <span>Community Options</span>
          </div>
        </>
      )}
    </CommunityBox>
  );
}

function getFakeViewership() {
  const date = new Date();
  const day = date.getDay() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return day * month * year;
}
