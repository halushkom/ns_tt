import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Footer from "./components/fotter/footer";
import React from "react";
import {ArticleList} from "./components/post/ArticleList";
import AddArticle from "./components/post/addPostForm";
import EditArticle from "./components/post/EditArticle";
import ArticleDetail from "./components/post/ArticleDetail";
import SearchPanel from "./components/header/search";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' render={() => (<SearchPanel/>)}/>
                    <Route path='/add_post' component={AddArticle}/>
                    <Route exact path="/article/:articleId" component={ArticleDetail}/>
                    <Route exact path="/edit/:articleId" component={EditArticle}/>
                    <Redirect to='/'/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
