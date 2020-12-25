import {Filter} from 'src/api/types';

export type SeacrhScreenProps = {
  handleSearch: () => void;
  handleOrganisationChange: (text: string) => void;
  handleRepositoryChange: (text: string) => void;
  handleFilterChange: (filter: Filter) => void;
  handleIssuePress: (issue: Issue) => void;
  handleEndReached: () => void;
  handleRefresh: () => void;
  issuesList: Array<Issue>;
  filter: Filter;
  isIssuesLoading: boolean;
  isSearchEnabled: boolean;
};

export type IssueDetailsScreenProps = {
  issue: Issue;
  repository: string;
  organisation: string;
  componentId: string;
  RightButtonId: string;
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
  currentIssuesPage: number;
};

export type Comment = {
  id: number;
  body: string;
  user: {avatar_url: string; login: string};
};
