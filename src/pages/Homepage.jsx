import React, { useEffect, useState } from 'react'

const Homepage = () => {
    const [books, setBooks] = useState([]);   
    const key = "ckGIq16H4cv0Lcy1aLorHmbOzDOEzmfd"
    //Secret= H5kFBq4LSJRjZHZW
    // https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`)
          .then((response) => response.json())
          .then((data) => {
            const booklist = data.results.books    
            setBooks(booklist)
            console.log(booklist);
          })
          .catch((error) => console.error(`Sorry, can't get books`, error));
      }, []);

    return (
        <section>
            <div>NYT Weekly Bestsellers</div>
            <div>
                {books.map(book => (
                    <div className="nytbook" key={book.rank}>
                        
                        <p>{book.rank}</p>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>Weeks on list: {book.weeks_on_list}</p>
                        <p>Description: {book.description}</p>
                    </div>
                ))}
            </div>     
        </section>
  )
}

export default Homepage