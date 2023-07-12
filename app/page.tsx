import { fetchNews } from '@/services/fetchNews';
import { categories } from '../categories';
import NewsList from './NewsList';
import response from '../response.json';

export default async function HomePage() {
  const news: NewsResponse = response || (await fetchNews(categories.join(',')));

  return <NewsList news={news} />;
}
