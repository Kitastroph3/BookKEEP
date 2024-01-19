import React, { useState } from 'react';


const BookSearch = () => {
  const [searchBook, setSearchBook] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(`http://openlibrary.org/search.json?title=${searchBook}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.docs);
        console.log(result.docs);
      })
      .catch((error) => console.error(`Sorry, can't get book data`, error));
  };

  return (
    <div >
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          placeholder="Book Title"
        />
        <button type="submit">Search</button>
      </form>

      <div className="left">
        {data.map((result) => (
          <div id="list" key={result.key}>
            <div>{result.title}</div>
            <div>{result.author_name[0]}</div>
            <div>{result.first_publish_year}</div>
            <div>{result.ratings_average}</div>
          </div>
        ))}
      </div>
          
    </div>
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