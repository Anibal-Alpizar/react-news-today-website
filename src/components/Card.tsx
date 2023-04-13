import { useEffect, useState } from "react";

interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

function Card(): JSX.Element {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const API_SECRET_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?sortBy=popularity&country=us&apiKey=${API_SECRET_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-center">Noticias</h1>
      {news.map((article: Article) => (
        <div key={article.title}>
          <h1 className="text-center">{article.author}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
