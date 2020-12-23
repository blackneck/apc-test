export type BookmarksScreenProps = {
  bookmarks: Array<Bookmark> | null;
};

export type Bookmark = {
  id: string;
  description: string;
};

export type CombinedPayloads = Bookmark | string;

export type BookmarksState = {[index: string]: Bookmark};
