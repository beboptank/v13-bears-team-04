type ChildrenType = { children: React.ReactNode };

export type CodeTypes = ChildrenType & {
  attributes: React.HTMLAttributes<HTMLPreElement>;
};

export type DefaultTypes = ChildrenType & {
  attributes: React.HTMLAttributes<HTMLParagraphElement>;
};

export type SpoilerTypes = ChildrenType & {
  attributes: React.HTMLAttributes<HTMLSpanElement>;
  children: React.ReactNode;
  leaf: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    spoiler?: boolean;
  };
};

export type LeafTypes = ChildrenType &
  SpoilerTypes & {
    spoilerStyles?: {
      background: string;
      borderRadius: string;
      cursor: string;
    };
    toggleSpoiler?: () => void;
  };
