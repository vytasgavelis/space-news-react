import {NewsClient} from "./client/NewsClient";

export default function RandomArticleButton() {
    const client = new NewsClient();

    async function showRandomArticle() {
        const id = Math.round(Math.random() * 10);
        const article = await client.getArticle(id)
        alert(article.id + ' ' + article.title)
    }
    return (
        <button onClick={showRandomArticle} className="button">🎲 Random article</button>
    );
}