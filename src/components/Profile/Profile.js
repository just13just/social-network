import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <article className={style.article}>
            <ProfileInfo
                profile={props.profile}
            />
            <MyPostsContainer />
        </article>
    )
}

export default Profile;