import { nanoid } from '@reduxjs/toolkit';
import * as ActionTypes from './actionTypes';

const initialState = {
    articles:[
        {
            id: nanoid(),
            title: "First article",
            content: "Description content",
            date: new Date(2021,1,2).toDateString(),
            edited: false
        },
        {
            id: nanoid(),
            title: "Second article",
            content: "Description content 2",
            date: new Date(2020, 1, 3).toDateString(),
            edited: false
        },
        {
            id: nanoid(),
            title: "Third article",
            content: "Description content 3",
            date: new Date(2021, 2, 23).toDateString(),
            edited: false
        }
]}

export const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: [
                    ...state.articles,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        content: action.payload.content,
                        date: action.payload.date,
                        edited: false
                    }
                ]
            });
        case ActionTypes.EDIT_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.map(article => {
                    if (article.id === action.payload.id) {
                        return Object.assign({}, article, {
                            title: action.payload.title,
                            content: action.payload.content,
                            edited: true
                        });
                    }
                    return article;
                })
            });
        case ActionTypes.DELETE_ARTICLE:
            return {
                articles: state.articles.filter(article => article.id !== action.payload)
            };

        default:
            return state;
    }
}