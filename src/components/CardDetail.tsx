interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

function CardDetail({ news }: { news: Article[] }) {
  return (
    <div>
      {news.map((article: Article) => (
        <div className="mt-10 border border-red-900" key={article.title}>
          <h1 className="text-center">{article.author}</h1>
          <h2 className="text-center">{article.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default CardDetail;
