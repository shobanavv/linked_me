import React, { Component } from 'react';
import './App.css';
import dummydata from './dummy-data';
import PostContainer from '../src/components/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="person-container">
          <ul>
          {dummydata.map(obj=>{
          return <PostContainer key={obj.username} obj={obj} />; 
            })}
            </ul>
          </div>
      </div>
    );
  }
}

export default App;

