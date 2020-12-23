export type SeacrhScreenProps = {
  handleSearch: () => void;
  handleOrganisationChange: (text: string) => void;
  handleRepositoryChange: (text: string) => void;
  handleFilterChange: (filter: 'open' | 'closed' | 'all') => void;
  handleIssuePress: (issue: Issue) => void;
  issuesList: Array<Issue>;
  filter: 'open' | 'closed' | 'all';
  isIssuesLoading: boolean;
};

export type Label = {
  id: number;
  name: string;
  color: string;
};

export type Issue = {
  id: number;
  state: 'open' | 'closed';
  title: string;
  body: string;
  html_url: string;
  labels: Array<Label>;
  created_at: string;
  updated_at: string;
  number: number;
};

export type SeacrhState = {
  issuesList: Array<Issue>;
  organisation: string;
  repository: string;
  sorting: string;
  filtering: string;
  currentIssue: Issue | {};
  isIssuesLoading: boolean;
  issueCommentsList: Array<Comment>;
};

export type Comment = {
  id: number;
  body: string;
  user: {avatar_url: string; login: string};
};
