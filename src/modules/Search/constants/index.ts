export const issueIconNameScheme = {
  open: 'issue-opened',
  closed: 'issue-closed',
};

export const filterSegmentedControlOptions: ['open', 'all', 'closed'] = [
  'open',
  'all',
  'closed',
];

export const sortOptionsScheme: Array<{
  label: 'Date Created' | 'Date Updated' | 'Comments';
  value: 'created' | 'updated' | 'comments';
}> = [
  {label: 'Comments', value: 'comments'},
  {label: 'Date Created', value: 'created'},
  {label: 'Date Updated', value: 'updated'},
];
