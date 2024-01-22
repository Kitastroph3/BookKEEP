import React, { useState } from "react";
// import { generateFave, findFave } from "../../controllers/api/faves"
import DefaultBook from "../downloads/NoImageBook.png";
import ReadingList from "./ReadingList";


// OKay so now I need to make sure a book is added only once (maybe, if time allows)
// --> Loop through array to see if it's added?
// Then I want to pull out the reading list data to it's own component
// Then I want to make sure the reading list data is saved to the database so it appears if user is logged in



const BookSearch = () => {
  const [searchBook, setSearchBook] = useState("");
  const [data, setData] = useState([]);
  const [faves, setFaves] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const readSpaces = encodeURIComponent(searchBook);
    fetch(`http://openlibrary.org/search.json?title=${readSpaces}&limit=60`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.docs);
        console.log(result.docs);
      })
      .catch((error) => console.error(`Sorry, can't get book data`, error));
  };

  const addToFaves = (result) => {
    const existingFave = faves.find((fave) => fave.key === result.key);

    if (!existingFave) {
      setFaves([...faves, result]);
    } else {
      console.log("Book already in reading list");
    };
  }
  return (
    <section>

      <ReadingList faves={faves} />

      <div id="BookPage">
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
            placeholder="Book Title"
          />
          <button type="submit">Search</button>
        </form>

        <div id="bookReturn">
          {data.map((result, i) => (
            <div
              className="bookGrid"
              key={result.key}
            >
              <div className="bookWrap">
                <div
                  className="bookCoverWrapper"
                  style={{
                    backgroundImage: `url(${
                      result.cover_i
                        ? `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`
                        : DefaultBook
                    })`,
                  }}
                  >
              </div>
                {/* {result.cover_i ? (
                <img
                  className="bookCover"
                  src={`https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}
                  alt={`Cover for ${result.title}`}
                />
              ) : (
                <img
                  className='bookCover'
                  src={DefaultBook}  
                  alt="No Image"
                  />
              )} */}
              </div>

              <div className="bookDesc">
                <p>
                  <b>{result.title}</b>
                </p>
                <p>{ result.author_name ? result.author_name[0]: "Author UnRegistered"}</p>
                <p>{result.first_publish_year}</p>
              </div>
              <button
                className="btnFaves"
                onClick={() => addToFaves(result)}>
                Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSearch;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import AuthorDetails from '../components/AuthorDetails';

// FOLLOWING CODE TO ROUTE DOES NOT WORK!

// const Homepage = () => {
//     const [searchAuthor, setSearchAuthor] = useState('');
//     const [data, setData] = useState([]);
//     const [selectedAuthor, setSelectedAuthor] = useState(null);
  
//     const handleSearch = (e) => {
//       e.preventDefault();
  
//       fetch(`http://openlibrary.org/search/authors.json?q=${searchAuthor}`)
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result.docs);
//           console.log(result.docs);
//         })
//         .catch((error) => console.error(`Sorry, can't get details`, error));
//     };
  
//     const handleSelectAuthor = (authorKey) => {
//       fetch(`http://openlibrary.org/authors/${authorKey}.json`)
//         .then((response) => response.json())
//         .then((result) => {
//           setSelectedAuthor(result);
//           console.log(result);
//         })
//         .catch((error) => console.error(`Can't get author details:`, error));
//     };
  
//     return (
//       <Router>
//         <div>
//           <form onSubmit={handleSearch}>
//             <input
//               type="text"
//               value={searchAuthor}
//               onChange={(e) => setSearchAuthor(e.target.value)}
//               placeholder="Author Name"
//             />
//             <button type="submit">Search</button>
//           </form>
  
//           {data.map((result) => (
//             <div id="list" key={result.key}>
//               <div>Author Name: {result.name}</div>
//               <Link to={`/author/${result.key}`}>
//                 <button onClick={() => handleSelectAuthor(result.key)}>Select</button>
//               </Link>
//             </div>
//           ))}
  
//           {selectedAuthor && (
//             <Route path={`/author/${selectedAuthor.key}`}>
//               <AuthorDetailPage author={selectedAuthor} />
//             </Route>
//           )}
//         </div>
//       </Router>
//     );
//   };
  
//   export default Homepage;