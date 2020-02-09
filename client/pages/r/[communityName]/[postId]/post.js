import React from "react";

import PostBanner from "./postbanner";
import FooterBox from "../../../../components/FooterBox";
import Layout from "../../../../components/Layout";
import PageHead from "../../../../components/PageHead";
import SubredditInfo from "../../../../components/SubredditInfo";
import ToTopButton from "../../../../components/ToTopButton";
import ViewPost from "../../../../components/ViewPost";
import fetchIt from "../../../../utils/fetch";

export default function Post({ post }) {
  console.log(post);

  return (
    <>
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <div className="viewpost__background">
        <div className="viewpost__container">
          <PostBanner
            vote=""
            voteScore={post.voteScore}
            title={post.title}
            communityName={post.community.name}
          />
          <Layout>
            {/* Daniel's */}
            <Layout.Column>
              <ViewPost post={post} />
            </Layout.Column>

            {/* Seth's */}
            <Layout.Column>
              {/* check the props in both those files, but either way I wrote... */}
              {/* ... them in typescript, so you should get some autocomplete... */}
              {/* ... while typing out the props */}
              {/* always */}
              {/* /ViewCommunity/communityabout.tsx  */}
              <SubredditInfo />
              {/* if the user is logged in */}
              {/* /ViewCommunity/communitymods.tsx  */}
              <FooterBox />
              <ToTopButton />
            </Layout.Column>
          </Layout>
        </div>
      </div>
    </>
  );
}

Post.getInitialProps = async ctx => {
  const { communityName, postId } = ctx.query;

  // console.log(communityName);
  try {
    const posts = await fetchIt("/posts");
    const [post] = posts.filter(({ _id }) => postId === _id);
    return { post };
  } catch (err) {
    return { error: err.message };
  }
};
