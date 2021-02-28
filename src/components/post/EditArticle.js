import React, {useState} from "react";
import {connect} from "react-redux";
import {editArticle} from "../../redux/action";

const mapStateToProps = (state) => {
    return {
        articles: state
    }
}

const EditArticle = ({dispatch, articles, match}) => {

    const { articleId } = match.params

    const article = articles.articles.find(article => article.id === articleId)

    const [title, setTitle]= useState(article.title)
    const [content, setContent] = useState(article.content)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    let handleSubmit = () => {
            dispatch(editArticle({id: article.id, title, content}))
        }

    return(
        <section className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        className="form-control"
                        name="title"
                        id="title"
                        value={article.title}
                        onChange={onTitleChanged}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={article.content}
                        onChange={onContentChanged}
                    />
                </div>
            </form>
            <div>
                <button className="btn btn-sm btn-outline-success" type='submit' onClick={handleSubmit}>Save</button>
            </div>
        </section>
    )
}
export default connect(mapStateToProps)(EditArticle)