import React from "react";
import axios from "axios";
import Movie from "./Movie";
class App extends React.Component{
  state={
    isLoading: true,
    movies: []
  };
   getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const{
      data : {
        data:{movies}
      }
    } =  await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    console.log({movies, isLoading: false});
  };
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const {isLoading, movies}=this.state;
    return(
      <div>
        {isLoading 
        ? "Loding......"
        : movies.map(movie =>(
        <Movie 
        key={movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        />
      ))}
      </div>
    );
  }
}
export default App;
//4 2     0:00......