import React from 'react';
import StyledList from './StyleList';




function PostContainer(props) {
    return (
        <StyledList>
          <li>
            <img className="App-image" src={props.obj.imageUrl}/>
            <p>{props.obj.username}</p>
            <p>{props.obj.College}</p>
            <p>{props.obj.Degree}</p>
          </li>
        </StyledList>
        )
}
export default PostContainer;