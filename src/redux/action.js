import * as ActionTypes from './actionTypes';
export const addArticle = article =>(
    {
        type: ActionTypes.ADD_ARTICLE,
        payload: article
    }
)
export const deleteArticle = articleId =>(
     {
        type: ActionTypes.DELETE_ARTICLE,
        payload: articleId
    }
)
export const editArticle = editedArticle => (
    {
        type: ActionTypes.EDIT_ARTICLE,
        payload: editedArticle
    }
)


