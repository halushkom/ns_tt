import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderPost from "./RenderPost";

export default function ArticleList(props){
    const renderedArticles = props.articles.map(article => {
        return(
        <div className='col-6 form-group ' key={article.id}>
            <div className="card-body post-excerpt"  >
                <RenderPost article={article}/>
            </div>
        </div>
        )
    })

    return (
        <div className="container">
        <section className="posts-list">
            <div className='row form-group'>
                    {renderedArticles}
            </div>
        </section>
        </div>
    )
}