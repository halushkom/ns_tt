import React from "react";
import RenderPost from "./RenderPost";

const FindSimilar = ({articles, selectedAnn}) => {
    let all_words_count = new Map()

    articles.map((article) => {
        let title_word_count = selectedAnn.filter(title => article.includes(title))
        let desc_words_count = selectedAnn.filter(content => article.includes(content))
        all_words_count.set(article.id, title_word_count+desc_words_count);
    })

    let articleID_list = []
    let sorted_map = new Map([...all_words_count.entries()].sort((a, b) => b[1] - a[1]))
    for (let i = 0; i < 3; i++) {
        for(let [key, value] of sorted_map.entries()) {
            if(value > 1){
                articleID_list.push(key);
                sorted_map.delete(key);
            }
        }
        if (articleID_list.length > 0) {
            return articleID_list.map((id) => {
                const article = articles.find(article => article.id === id)
                return (
                    <div key={article.id} >
                        <RenderPost article={article}  />
                    </div>
                )
            })
        }
        return (
            <h4>
                No Similar Posts Were Found :(
            </h4>
        )
    }
}
export default FindSimilar;
