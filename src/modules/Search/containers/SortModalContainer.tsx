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

  console.log(currentSort);
  return (
    <SortModal currentSort={currentSort} handleSortChange={handleSortChange} />
  );
};
