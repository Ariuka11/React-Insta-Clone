import React from 'react';
import './App.css';
import DummyData from './dummy-data';
import Searchbar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import dummyData from './dummy-data';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data : dummyData,
      newComment: ''
    }
  }
  render(){
    return (
      <div className = "App">
        <Searchbar/>
      </div>
    );
  }
}

export default App;
