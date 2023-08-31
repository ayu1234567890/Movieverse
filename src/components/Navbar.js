import React from "react";
// import { data } from '../data';
import { addMovieToList, handleMovieSearch } from "../actions";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showSearchResult: false,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    // const {movie} = this.props;
    this.props.dispatch(addMovieToList(movie));
    // this.setState({
    //   showSearchResults: false,
    // });
  };
  handleSearchClick = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const { showSearchResults, results: movie } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input
            onChange={this.handleSearchChange}
            placeholder="Search-movies"
          />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>
          {
            showSearchResults && (
              <div className="search-results">
                <div className="search-result">
                  <img src={movie.Poster} alt="movie-pic" />

                  <div className="movie-info">
                    <span> {movie.Title} </span>
                    <button onClick={() => this.handleAddToMovies(movie)}>
                      Add to Movies
                    </button>
                  </div>
                </div>
              </div>
            )
            // </div>
          }
        </div>
      </div>
    );
  }
}
// class NavbarWrapper extends React.Component{
//   render() {
//     return(
//       <StoreContext.Consumer>
//       {(store) => (
//       <Navbar dispatch={store.dispatch} search={this.props.search} />
//       )}
//       </StoreContext.Consumer>
//     );
//   }

// }
function mapStateToProps({ search }) {
  return {
    search,
  };
}

export default connect(mapStateToProps)(Navbar);
