export type BookmarksScreenProps = {
  handleBookmarkPress: (bookmark: Bookmark) => void;
  bookmarks: Array<Bookmark> | null;
  // isEditing: boolean;
  // selectedBookmarks: {[index: number]: boolean};
  // isDeleteVisible: boolean;
};

export type Bookmark = {
  organisation: string;
  repository: string;
  title: string;
  body: string;
  html_url: string;
  state: 'open' | 'closed';
};

export type CombinedPayloads = Bookmark | string;

export type BookmarksState = {
  bookmarksScheme: {[index: string]: Bookmark};
};
