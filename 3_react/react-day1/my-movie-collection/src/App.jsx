import "./App.css";
import Footer from "./components/Footer";
import GenreStat from "./components/GenreStat";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import RecommendedMovies from "./components/RecommendedMovies";
import Stat from "./components/Stat";

function App() {
  return (
    <div className="App">
      <h1>나만의 영화 컬렉션</h1>
      <Header />
      <Stat />
      <MovieList />
      <RecommendedMovies />
      <GenreStat />
      <Footer />
    </div>
  );
}

export default App;
