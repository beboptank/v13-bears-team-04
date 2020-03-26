import React from "react";

import FooterBox from "../../FooterBox";
import Form from "./Form";
import Info from "./Info";
import Layout from "../../Layout";
import Rules from "./Rules";
import Text from "./Text";

import { useForceSignIn } from "../../../hooks";
import { PostProvider } from "../postcontext";

type Props = {
  communityId: string;
  communityName: string;
};

// handling of the post creation is located in the `formbodyactionssubmit` file
export default function PostCreate({ communityId, communityName }: Props) {
  useForceSignIn();

  return (
    <PostProvider communityId={communityId} communityName={communityName}>
      <Layout cx="submit-container">
        <Layout.Column cx="submit__left">
          <Form />
        </Layout.Column>

        <Layout.Column>
          <Info />
          <Rules />
          <Text />
          <FooterBox />
        </Layout.Column>
      </Layout>
    </PostProvider>
  );
}
