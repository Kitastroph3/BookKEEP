import React from 'react'

const ReadingList = ({faves}) => {
    return (
      <>
      <div>Reading List</div>
      {/* IF FAVES Map is greater than 0, map through results OR display empty Reading List */}
      {faves.length > 0 ? (
        <div>
          {/* MAP through each item in list */}
          {faves.map((fave, index) => (
            <div key={index} className="faveContainer">
              <div className="bookDesc">
                <p>
                  <b>{fave.title}</b>
                </p>
                <p>{fave.author_name[0]}</p>
                <p>{fave.first_publish_year}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}

      <hr />
</>

  )
}

export default ReadingList