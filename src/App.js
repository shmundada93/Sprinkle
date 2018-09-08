import React, { Component } from 'react';
import logo from './logo.svg';
import { movieList } from './data/data';
import TextField from '@material-ui/core/TextField';
import MovieCard from './components/movieCard';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <div >
         <TextField
          label="Search by Genre"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          style={{margin:16, width:'50%'}}
        />
         {movieList
          .filter((movie) => {
            for(let genre of movie.genre){
              // Can be improved with indexing
              if(genre.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())) {
                return true;
              }
            }
            return false;
          })
          .map((movie) => <MovieCard movieData={movie}/>)}
      </div>
    );
  }
}

export default App;
