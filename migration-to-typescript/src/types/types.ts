type SourceItem = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}
type NewsSource = {
  id: string; 
  name: string;
}

type NewsItem = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: NewsSource;
  title: string;
  url: string;
  urlToImage: string;
}


interface DataSourcesInterface {
  sources: SourceItem[];
  status: string;
}

interface DataNewsInterface {
  articles?: NewsItem[];
  status: string;
  totalResults?: number;
}

type CallbackType<T> = (data: T) => void;

interface ApiOptionsInterface {
  apiKey: string;
}

interface OptionsInterface {
  sources?: string;
}
interface QueryOptionsInterface {
  endpoint: string;
  options?: OptionsInterface
}