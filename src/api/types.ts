export type RequestIssuesParameters = {
  state?: Filter;
  sort?: Sort;
  organisation: string;
  repository: string;
  page?: number;
  per_page?: number;
};

export type RequestIssueCommentsParameters = {
  organisation: string;
  repository: string;
  issueNumber: number;
};

export type Filter = 'open' | 'closed' | 'all';
export type Sort = 'updated' | 'created' | 'comments';
