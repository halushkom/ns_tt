import React from "react";
import {connect} from 'react-redux';
import Header from "../header/header";


const mapStateToProps = (state) => {
    return {
        articles: state
    }
}
const ArticleDetail = ({articles, match}) => {
    const {articleId} = match.params

    const article = articles.articles.find(article => article.id === articleId)
    if (!article) {
        return (
            <>
                <Header/>
                <h4> Post Not Found :(</h4>
            </>
        );
    }
    return (
        <>
            <Header/>
            <section className="card col-12 text-center ">
                <div className="card-body post-excerpt">
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.content}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <p>{article.date}</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default connect(mapStateToProps)(ArticleDetail)