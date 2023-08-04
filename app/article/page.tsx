import { notFound } from 'next/navigation';
import LiveTimestamp from '../LiveTimestamp';

type Props = {
  searchParams?: Article;
};

export default function ArticlePage({ searchParams }: Props) {
  if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10 pt-10'>
        {article.image && (
          <img
            alt={article.title}
            src={article.image}
            className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md'
          />
        )}
        <div className='px-10'>
          <h1 className='headerTitle px-0 no-underline pb-2'>{article.title}</h1>
          <div className='flex divide-x-2 space-x-4'>
            <h2 className='font-bold'>By: {article.author === 'null' ? 'Unknown' : article.author}</h2>
            <h2 className='font-bold pl-4'>Source: {article.source}</h2>
            <h2 className='pl-4'>
              <LiveTimestamp time={article.published_at} />
            </h2>
          </div>
          <p className='pt-4'>{article.description}</p>
        </div>
      </section>
    </article>
  );
}
