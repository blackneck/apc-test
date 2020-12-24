import React, {useCallback} from 'react';

import SortModal from '../components/SortModal';

export default ({
  currentSort,
  onSubmit,
}: {
  currentSort: 'created' | 'updated' | 'comments';
  onSubmit: (sortValue: 'created' | 'updated' | 'comments') => void;
}) => {
  const handleSortChange = useCallback(
    (newSort: 'created' | 'updated' | 'comments') => (): void => {
      onSubmit(newSort);
    },
    [onSubmit],
  );

  return (
    <SortModal currentSort={currentSort} handleSortChange={handleSortChange} />
  );
};
