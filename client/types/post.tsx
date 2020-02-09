export type PostType = {
  comments: string[];
  voteScore: number;
  isDeleted: boolean;
  isReported: boolean;
  isOver18: boolean;
  isOC: boolean;
  isSpoiler: boolean;
  _id: string;
  community: {
    name: string;
    theme: {
      ["--community-theme-main"]: string;
      ["--community-theme-text"]: string;
    };
  };
  postType: string;
  title: string;
  content: string;
  author: {
    username: string;
  };
  createdOn: string;
  lastModified: string;
  lastUpvoted: string;
};
