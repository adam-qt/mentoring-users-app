import {DeepReadonly} from '@users/core/utils';

export type FolderDTO = DeepReadonly<{
  id: number
  title: string;
  created_at: number;
}>

export type CreateFolderDTO = DeepReadonly<{
  title: string;
}>
