import React from "react";
import Article from "./Article/Article";
import AddArticle from "./AddArticle/AddArticle";

import { connect } from "dva";

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

const App = ({ articles, dispatch }) => {
  const saveArticle = article => {
    article["id"] = articles.length + 1;
    const newArticles = articles.concat(article);
    dispatch({
      type: "app/fetch",
      payload: {
        articles: newArticles
      }
    });
  };

  return (
    <div>
      <AddArticle saveArticle={saveArticle} />
      <Articles articles={articles} />
    </div>
  );
};

export default connect(({ app }) => ({
  articles: app.articles
}))(App);
