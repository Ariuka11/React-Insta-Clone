import React, {Component} from 'react';
import './App.css';
import Searchbar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     data : dummyData,
  //     newComment: ''
  //   }
  // }
  render(){
    return (
      <div className = "App">
        <Searchbar/>
        <div className = "post-wrapper">
          <PostContainer/>
        </div>
      </div>
    );
  }
}

export default App;
