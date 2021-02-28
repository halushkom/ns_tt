import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from "../post/ArticleList";
import Header from "./header";
import {selectArticles} from "../../redux/selectors";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        articles: selectArticles(state)
    }
}


const SearchPanel = ({articles}) => {
    let [search, setSearch] = useState('')

    const handleChange = event =>{
        setSearch(event.target.value)
    }

    return(
        <>
            <Header handleChange = {handleChange}/>
            <ArticleList articles={articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))}/>

        </>
    )
}

export default connect(mapStateToProps)(SearchPanel);