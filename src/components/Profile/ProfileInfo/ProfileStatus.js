import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    const { userStatus, getUpdateStatus } = props

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(userStatus)

    const authorizedUserId = useSelector(state => state.auth.userId)
    const selectedProfileUserId = useSelector(state => state.profilePage.profile.userId)

    const isMyProfile = authorizedUserId === selectedProfileUserId

    const activateEditMode = () => {
        isMyProfile && setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        if (userStatus !== status) {
            getUpdateStatus(status)
        }
    }
    const onStatusChange = (text) => {
        setStatus(text)
    }

    useEffect(() => {
        setStatus(userStatus)
    }, [userStatus])


    return (
        <>
            {!editMode &&
                <div className={isMyProfile ? style.profileStatus : ''}>
                    <span onDoubleClick={() => activateEditMode()}>
                        {userStatus || (isMyProfile ? "enter status there" : null)}
                    </span>
                </div>}
            {editMode &&
                <div>
                    <input
                        className='form-control mt-2'
                        onBlur={() => { deactivateEditMode() }}
                        autoFocus={true}
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                    />
                </div>}
        </>
    )

}

export default ProfileStatus;