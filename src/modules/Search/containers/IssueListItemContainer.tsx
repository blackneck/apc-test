import React, {useCallback} from 'react';

import IssueListItem from '../components/IssueListItem';
import {Issue} from '../types';

export default ({
  onPress,
  issue,
}: {
  issue: Issue;
  onPress: (issue: Issue) => void;
}) => {
  const handlePress = useCallback(() => {
    onPress(issue);
  }, [onPress, issue]);

  return <IssueListItem handlePress={handlePress} issue={issue} />;
};
