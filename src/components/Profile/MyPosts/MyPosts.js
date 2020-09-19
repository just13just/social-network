import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post
            key={post.text}
            avatar={post.avatar}
            text={post.text}
            like={post.like}
        />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = { type: "ADD-POST" };
        props.dispatch(action);
    }
    
    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = { type: "CHANGE-POST", newText: text };
        props.dispatch(action)
    }

    return (
        <div className={style.wrap}>
            <h4> Feed </h4>
            <div>
                <div className="containerTextarea">
                    <textarea
                        ref={newPostElement}
                        onChange={onChangePost}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={addPost}>Add news</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;