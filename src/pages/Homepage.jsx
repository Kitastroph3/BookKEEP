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
            <h3 style={{
                display: "flex", alignItems: "center", justifyContent:"center", fontSize: "20pt"}}>NYT Weekly Bestsellers</h3>
            <div id="nytReturn">
                {books.map(book => (
                    <div className="nytbook" key={book.rank}>
                        <div className='nytbookWrapper'>
                            <div className='nytbookPic'
                            style={{
                                backgroundImage: `url(${book.book_image})`,
                            }}
                                >
                            </div>
                            {/* <img alt={book.title} src={book.book_image}  /> */}
                        </div>
                        <div className='nytbookDesc'>
                            <p className='numero'>#{book.rank}</p>
                            <p className="nytStyle"><b>{book.title}</b></p>
                            <p className='nytStyle'><b>{book.author}</b></p>
                            <p className='nytStyle'>Weeks on list: {book.weeks_on_list}</p>
                            <p className='nytStyle'>{book.description}</p>
                        </div>
                    </div>
                ))}
            </div>     
        </section>
  )
}

export default Homepage