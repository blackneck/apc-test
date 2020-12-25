export type BookmarksScreenProps = {
  handleBookmarkPress: (bookmark: Bookmark) => void;
  bookmarks: Array<Bookmark> | null;
  // isEditing: boolean;
  // selectedBookmarks: {[index: number]: boolean};
  // isDeleteVisible: boolean;
};

export type Bookmark = {
  id: number;
  organisation: string;
  repository: string;
  title: string;
  body: string;
  number: number;
  state: 'open' | 'closed';
};

export type CombinedPayloads = Bookmark;

export type BookmarksState = {
  bookmarksScheme: {[index: string]: Bookmark};
};
