import type Article from "../types/Article";
import {formatDate} from "../helpers/DateHelpers"
type ArticleProps = {
    article: Article
}
// @ts-ignore
export function ArticleCard({article}) {
    return (
        <div className="article green-border">
            <img className="article__image" src={article ? article.imageUrl : 'placeholder'} alt="Article image"/>
            <div className="article__text">
                <a href="" className="article__link"><h3>{article.title}</h3></a>
            <p>Published: { formatDate(article.publishedAt) }</p>
            <p>Updated: { formatDate(article.updatedAt) }</p>
        </div>
</div>
    );
}