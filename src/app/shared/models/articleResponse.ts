import { Article } from './article';

export interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
