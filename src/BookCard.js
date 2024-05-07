import React from "react";

function BookCard({books}){
    return (
        <div className = "book">

            <h2>{books.title}</h2>
            <img src={books.thumbnailUrl} alt={books.title} />
            <p>{books.authors}</p>
            <p>{books.shortDescription}</p>
            <p>{books.pageCount}</p>
            <p>{books.categories}</p>
            <p>{books.publishedDate}</p>
        </div>
    )

}

export default BookCard