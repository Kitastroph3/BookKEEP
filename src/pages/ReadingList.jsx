import React from 'react'

const ReadingList = ({faves}) => {
    return (
      <>
        <h3 style={{textAlign:"center"}}>Reading List</h3>
      {/* IF FAVES Map is greater than 0, map through results OR display empty Reading List */}
      {faves.length > 0 ? (
        <div id="flexRL">
          {/* MAP through each item in list */}
            {faves.map((fave, index) => (
            <div key={index} className="faveContainer" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <div className="bookDesc readingListItem">
                <p className='favesTitle'>
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