import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomArticleButton from "./RandomArticleButton";
import Header from "./Header";

// async function fetchNews() {
//   const data = await client.getArticles()
//   articles.value = data
// }
//
// async function showRandomArticle() {
//   const id = Math.round(Math.random() * 10);
//   const article = await useArticle(id)
//   alert(article.id + ' ' + article.title)
// }
//
// <Button @click="showRandomArticle"></Button>

function App() {
  return (
    <div className="App">
        <Header></Header>
        <RandomArticleButton/>
    </div>
  );
}

export default App;
