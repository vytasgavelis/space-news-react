import {useEffect, useState} from "react";
import {NewsClient} from "../client/NewsClient";
import type Article from "../types/Article";
import {ArticleCard as ArticleCard} from '../components/ArticleCard';

export default function News() {
    const client = new NewsClient();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        client.getArticles().then(
            // @ts-ignore
            res =>{
                setArticles(res);
                setLoading(false);
            }
        );
    }, [])
    return (
        <div className="article-container">
            {
                loading ? <h3>Loading...</h3> :
                    articles.map(article => (
                        <ArticleCard article={article}/>
                    ))
            }
        </div>
    );
}