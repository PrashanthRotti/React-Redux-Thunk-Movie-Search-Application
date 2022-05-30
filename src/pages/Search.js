import React from "react";

const Search = (props) => {
    const movieDescription = (imdbID) => {
        props.movieDescription(imdbID)
    }
    return (
        <div className="mvscont">
            <center>
                {props.data && props.data.map((item, index) => (
                    <div key={index} className="mv-card" onClick={() => movieDescription(item.imdbID)}>
                        <div className="mv-header" style={{ "backgroundSize": "cover" }}>
                            <div className="header-icon-container">
                                <a className="mvs" href="#">
                                    <img src={item.Poster} className="fa header-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="mv-content">
                            <div className="mv-content-header">
                                <h3 className="mv-title">{item.Title}</h3>
                            </div>
                        </div>
                    </div>
                ))}

                {!props.data && <h3 className="not-found">Movie Not Found !!</h3>}
            </center>
        </div>
    )
}

export default Search;
