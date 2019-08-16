import { Source } from './source';

export interface SourceResponse {
  status: string;
  totalResults: number;
  sources: Source[];
}
