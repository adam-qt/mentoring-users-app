import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FOLDERS_FEATURE_KEY, FoldersState, foldersAdapter } from './folders.reducer';

// Lookup the 'Folders' feature state managed by NgRx
export const selectFoldersState = createFeatureSelector<FoldersState>(FOLDERS_FEATURE_KEY);

const { selectAll, selectEntities } = foldersAdapter.getSelectors();

export const selectFoldersLoaded = createSelector(selectFoldersState, (state: FoldersState) => state.loaded);

export const selectFoldersError = createSelector(selectFoldersState, (state: FoldersState) => state.error);

export const selectAllFolders = createSelector(selectFoldersState, (state: FoldersState) => selectAll(state));

export const selectFoldersEntities = createSelector(selectFoldersState, (state: FoldersState) => selectEntities(state));

export const selectSelectedId = createSelector(selectFoldersState, (state: FoldersState) => state.selectedId);

export const selectEntity = createSelector(selectFoldersEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);

export const selectFolderById = (id: number)=> createSelector(selectFoldersEntities, (entities)=> entities[id]);
