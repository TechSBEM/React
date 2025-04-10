import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// There are 3 types of components:
// **1...Stateless/ presentational components
// **2...Stateful Componet
// **3...Structural Components: For layout

// Movie ApI key
const KEY = "f84fc31d";

// Structural Components
export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("kids");
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  function handleSelectedId(id) {
    // MAking sure the mmovie details load ones
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  // This function closes the movie details render on the screen
  function handleCloseMovie() {
    setSelectedID(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  useEffect(
    function () {
      async function fetchMovies() {
        // Throwing an error when the internet connection goes wrong
        try {
          setIsLoading(true);
          // Alls reseting the error messagw with new loading
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok)
            throw new Error("Somethinh went wrong with fetching movies");

          const data = await res.json();
          // Throwing error for movies not found
          if (data.Response === "False") throw new Error("Movies Not found");
          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      // Making should the error displays only when the movies length is more than 3 characters and not found
      if (query.length < 3) {
        // Setting movies state to empty array
        setMovies([]);
        // Setting Error to empty string
        setError("");
        return;
      }

      // Calling the fetcMovies function
      fetchMovies();
      // To make a state renders in an effect, it should be in the dependency array
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      {/* Using composistion to fixe prop drilling
        Who need the prop
      */}
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedId={handleSelectedId} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onhandleCloseMovies={handleCloseMovie}
              onAddWatched={handleAddWatched}
              // For the array of watched Movies
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// Structural Components
function NavBar({ children }) {
  // It not nice to have custom component togeter with that of in-built ones
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

// Presentational Component: Just present an image
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// The search bar has it own component because it will be used accross the entire app

//Stateful component
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// Presentational componet
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return (
    // Spliting components into 2 based on the watched and list on the UI

    <main className="main">{children}</main>
  );
}

// Stateful Component
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}

// Stateful Component
function MovieList({ movies, onSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        // We need the key here too
        <Movie movie={movie} key={movie.imdbID} onSelectedId={onSelectedId} />
      ))}
    </ul>
  );
}

// Presentational Component
function Movie({ movie, onSelectedId }) {
  return (
    <li onClick={() => onSelectedId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({
  selectedID,
  onhandleCloseMovies,
  onAddWatched,
  watched,
}) {
  // Creating a state to store the selected movie to be rendered on the lefside on the movies page
  const [movie, setMovies] = useState({});
  // Using state to show some info when there is delay in the data fetch
  const [isLoading, setIsLoading] = useState(false);
  // Using state to set the user-rating but the user
  const [userRating, setUserRating] = useState("");

  // What's done:
  /* 
  1.We arleady have the 'SelectedID' and the array('watched') movies as a prop
  2.We use map to get a copy of all the movies id using 'movies.imdbID'
  3. We check whether the selected ID is include, if it is, The function returns, 'true'
  */
  const isWatched = watched.map((movies) => movies.imdbID).includes(selectedID);
  // finding the rate of the selected movies
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;

  // Destructuin the movies into our prefer names
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // A function to help adding the movies into previous watched list
  function handleAdd() {
    //Destructing the movie object variable into my prefered named
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)), //Trying to get the first past(minutes) only
      userRating,
    };

    onAddWatched(newWatchedMovie);
    // Closing the movies details and getting back to the movies watched
    onhandleCloseMovies();
  }

  // Rending the movies from an API
  useEffect(
    function () {
      setIsLoading(true);
      async function getMoviesDetailed() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );

        const data = await res.json();
        // Making sure the same data in not add twices
        // Using the find function

        setMovies(data);
        setIsLoading(false);
      }
      getMoviesDetailed();
    },
    // Will be re-render or mounted when the selectedID changes
    [selectedID]
  );

  // Use , useEffect for a single event not multiple
  useEffect(
    function () {
      // Rendering nothing with no title
      if (!title) return;

      // Chechng the document title with the movie selected
      document.title = `Movie | ${title}`;
    },
    [title]
  );
  return (
    <div className="details">
      {/* Cheching whether the API is done loading */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onhandleCloseMovies}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐{imdbRating} IMDB rating</span>
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {/* If the selectedID is false, we render the staring rating or if it is within('true') we render a paragraph */}
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {/* Rendering the button conditional until the user rates the movie */}
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      +Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie already {watchedUserRating}⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

// Stateless component
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

// Stateless
function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

// Stateless component
function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          x
        </button>
      </div>
    </li>
  );
}
