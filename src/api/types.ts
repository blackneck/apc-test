export type RequestIssuesParameters = {
  state?: 'open' | 'closed' | 'all';
  sort?: 'updated' | 'created' | 'comments';
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
