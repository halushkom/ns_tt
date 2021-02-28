import React, {useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addArticle} from "../../redux/action";
import Header from "../header/header";


const AddArticle = ({dispatch}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    let handleSubmit = e => {
        if (title && content) {
            dispatch(
                addArticle({
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toDateString()
                })
            );
            setTitle('');
            setContent('');
        }
    }
    return (
        <>
            <Header/>
            <section className="container">
                <div class="form-style-8">
                    <h2>Here you can add your announcement</h2>
                    <form class="row g-3 mb-3">
                        <div className="col-12">
                            <div className="mb-3 ">
                                <input
                                    className="form-control"
                                    type='text'
                                    name="title"
                                    id="title"
                                    value={title}
                                    onChange={onTitleChanged}
                                    placeholder='Title'
                                />
                            </div>
                            <div>
                                <textarea
                                    id="description"
                                    value={content}
                                    onChange={onContentChanged}
                                    placeholder='Description'
                                />
                            </div>
                            <div>
                                <input type='submit' onClick={handleSubmit} value='Save'/>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default connect()(AddArticle)