import React from 'react'
import Article from './Article';

// использум functional компонент, т.к. state нам не нужен
export default function ArticleList({articles}) {
    // для каждого элемента массива нужен уникальный ключ! не использовать индекс массива!!
    const articleElements = articles.map((article) => <li key={article.id}><Article article = {article}/></li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}