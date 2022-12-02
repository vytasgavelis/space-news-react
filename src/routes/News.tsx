import {useEffect, useState} from "react";
import {NewsClient} from "../client/NewsClient";
import type Article from "../types/Article";
import {ArticleCard as ArticleCard} from '../components/ArticleCard';

export default function News() {
    const client = new NewsClient();
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        client.getArticles().then(
            // @ts-ignore
            res => setArticles(res)
        );
    }, [])
    return (
        <div className="article-container">
                {articles.map(article => (
                    <ArticleCard article={article}/>
                ))}
        </div>
    );
}