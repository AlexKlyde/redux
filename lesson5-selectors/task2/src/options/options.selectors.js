import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

// option 2
export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);

// option 1
/* 
export const selectedOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = selectedIdsSelector(state);

  return allOptionsList.filter(option => selectedIds.includes(option.id));
}

export const availableOptionsSelector = state => {
  const allOptionsList = optionsListSelector(state);
  const selectedIds = selectedIdsSelector(state);

  return allOptionsList.filter(option => !selectedIds.includes(option.id));
}
 */