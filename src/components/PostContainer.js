import React from 'react';
import StyleList from './StyleList';



function PostContainer(props) {

    return (
        <StyleList>
        <img className="App-image" alt="coffee" src={props.obj.imageUrl} />
        <p> {props.obj.username}</p>
        <p>{props.obj.College}</p>
        <p>{props.obj.Degree}</p>
        </StyleList>
        )
}
export default PostContainer;